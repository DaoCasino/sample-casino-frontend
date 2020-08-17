import React, { useEffect } from 'react';
import config from 'Config/AppConfig';
import { IframeMessagingProvider } from '@daocasino/platform-messaging/lib.browser/IframeMessagingProvider';
import { GameService } from '@daocasino/platform-back-js-lib';
import { getAPI } from 'Services/SDK';
import styled from 'styled-components';
import GameIframeLoader from '../GameIframeLoader';

import { Helmet } from 'react-helmet';

const GameIframeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const IframeComponent = styled.iframe`
  width: 100%;
  height: 100%;
  flex: 1;
`;

let providers = [];
let iframeId;

const destroyProviders = () => {
  for (let i = 0; i < providers.length; i++) {
    if (providers[i] !== null) {
      providers[i].destroy();
      providers[i] = null;
    }
  }
};

const getIframeId = ({ id }) => `game:${id}`;

const initMessaging = async (game, iframeId) => {
  console.log('initMessaging', { iframeId });
  let provider = null;
  try {
    const api = await getAPI();
    const service = new GameService(api, game, config.casinoId);

    provider = await IframeMessagingProvider.create('parent', iframeId);
    provider.exposeService('GameService', service);
  } catch (err) {
    console.log('initMessaging error', iframeId);
    console.error(err);
  }

  return provider;
};

function GameFullIframe(props) {
  const { game, setLoading } = props;
  const { name, url } = game;
  iframeId = getIframeId(game);

  useEffect(() => {
    const { id } = game;
    setLoading(id, true);

    initMessaging(game, iframeId).then((provider) => {
      destroyProviders();
      providers.push(provider);
      setLoading(id, false);
    });

    return () => {
      destroyProviders();
    };
  }, [game, setLoading]);

  const src =
    url +
    `?iframe=${iframeId}&casinoUrl=${config.casinoUrl}` +
    (config.isDev ? `&${new Date().getTime()}` : '');

  return (
    <React.Fragment>
      <Helmet>
        <title>Sample - {name}</title>
      </Helmet>
      <GameIframeWrapper>
        <GameIframeLoader />
        <IframeComponent title={name} id={iframeId} src={src} />
      </GameIframeWrapper>
    </React.Fragment>
  );
}

export default GameFullIframe;
