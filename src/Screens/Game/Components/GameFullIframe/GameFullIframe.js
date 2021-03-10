import React, { useEffect } from 'react';
import config from 'Config/AppConfig';
import { IframeMessagingProvider } from '@daocasino/platform-messaging/lib.browser/IframeMessagingProvider';
import { GameService } from '@daocasino/platform-back-js-lib';
import { getAPI } from 'Services/SDK';
import styled, { css } from 'styled-components';
import GameIframeLoader from '../GameIframeLoader';
import { getSeoTitle, getSeoDescription } from '../../seo';

import { Helmet } from 'react-helmet';

const showScreenBorder = (() => {
  if (config.isDev) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has('border');
  }
  return false;
})();

const GameIframeWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  ${showScreenBorder &&
  css`
    border: 2px solid red;
  `}
`;
const IframeComponent = styled.iframe`
  width: 100%;
  height: 100%;
`;

// window['providers'] = window['providers'] || [];
let iframeId;

// const destroyProviders = () => {
//   for (let i = 0; i < providers.length; i++) {
//     if (providers[i] !== null && typeof providers[i].destroy === 'function') {
//       providers[i].destroy();
//       providers[i] = null;
//     }
//   }
// };

const getIframeId = ({ id }) => `game:${id}`;

const initMessaging = async (
  token,
  game,
  iframeId,
  showInsufficientBalance
) => {
  console.log('IFRAME init messaging', iframeId);

  let cancelled = false;
  let provider = null;

  token.cancel = () => {
    cancelled = true;
    if (provider !== null && typeof provider.destroy === 'function') {
      provider.destroy();
      console.log('IFRAME stop messaging', iframeId);
    }
    console.log('IFRAME cancel', iframeId);
  };

  const api = await wrapWithCancel(getAPI)();
  const service = new GameService(api, game, config.casinoId);
  service.on('insufficient-balance', showInsufficientBalance);

  const gameURL = new URL(game.url);
  const create = () =>
    IframeMessagingProvider.createParent(iframeId, gameURL.origin);

  provider = await wrapWithCancel(create)();
  provider.exposeService('GameService', service);

  if (cancelled) {
    throw { reason: 'cancelled' };
  }

  return provider;

  function wrapWithCancel(fn) {
    return (data) => {
      if (!cancelled) {
        return fn(data);
      }
    };
  }
};

function GameFullIframe(props) {
  const {
    game,
    setLoading,
    demo,
    showInsufficientBalance
  } = props;
  const { name, url } = game;
  iframeId = getIframeId(game);

  console.log('render GameFullIframe', iframeId);

  useEffect(() => {
    console.log('GameFullIframe useEffect', game);
    const { id } = game;
    setLoading(id, true);

    const token = {};
    const promise = initMessaging(
      token,
      game,
      iframeId,
      showInsufficientBalance
    );

    promise
      .then(() => {
        setLoading(id, false);
      })
      .catch((err) => {
        // TODO: add error message
        console.error('IFRAME error', err);
      });

    return () => {
      if (typeof token.cancel === 'function') {
        token.cancel();
      }
    };
  }, [game, setLoading, showInsufficientBalance]);

  function handleOnLoad() {
    if (demo === true) {
      setLoading(game.id, false);
    }
  }

  const getSrc = () => {
    const src = new URL(url);
    src.searchParams.append('iframe', iframeId);
    src.searchParams.append('casinoUrl', config.casinoUrl);

    if (demo) {
      src.searchParams.append('demo', true);
    }
    if (config.isDev) {
      src.searchParams.append(new Date().getTime(), '');
    }

    return src.toString();
  };

  const src = getSrc();

  const title = getSeoTitle(name + (demo ? ' demo' : ''));
  const description = getSeoDescription(game.description);

  return (
    <React.Fragment>
      <Helmet>
        <meta property='og:title' content={title} />
        <title>{title}</title>
        {description && (
          <meta property='og:description' content={description} />
        )}
        {description && <meta name='description' content={description} />}
      </Helmet>
      <GameIframeWrapper>
        <GameIframeLoader game={game} />
        <div>
          <IframeComponent
            title={name}
            id={iframeId}
            src={src}
            onLoad={handleOnLoad}
          />
        </div>
      </GameIframeWrapper>
    </React.Fragment>
  );
}

export default GameFullIframe;
