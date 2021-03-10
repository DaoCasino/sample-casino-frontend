import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

import GameIframeWindow from './GameIframeWindow';
import GameIframeLoader from '../GameIframeLoader';

import { IframeMessagingProvider } from '@daocasino/platform-messaging/lib.browser/IframeMessagingProvider';
import { GameService } from '@daocasino/platform-back-js-lib';
import { getAPI } from 'Services/SDK';
import config from 'Config/AppConfig';
import { Helmet } from 'react-helmet';

import { styles, IframeComponent } from './GameIframeStyles';

let providers = [];
let fullscreen = false;
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

function handleExpandedClick() {
  fullscreen = !fullscreen;
  console.log('handleExpandedClick', fullscreen);

  const iframeContent = document.getElementById('embeded-content');
  const gameIframe = document.getElementById(iframeId);

  if (fullscreen) {
    iframeContent.removeAttribute('style');
    gameIframe.style.position = 'absolute';
    document.addEventListener('keydown', handlePressEsc, false);
  } else {
    document.removeEventListener('keydown', handlePressEsc, false);
    gameIframe.removeAttribute('style');
    iframeContent.style.position = 'relative';
  }
}

function handlePressEsc(e) {
  if (e.keyCode === 27) {
    console.log('handlePressEsc');
    fullscreen = true;
    handleExpandedClick();
  }
}

const initMessaging = async (game, iframeId) => {
  console.log('initMessaging', { iframeId });
  let provider = null;
  try {
    const api = await getAPI();
    const service = new GameService(api, game, config.casinoId);

    service.on('esc', () => {
      console.log('service on esc');
      fullscreen = true;
      handleExpandedClick();
    });

    provider = await IframeMessagingProvider.create('parent', iframeId);
    provider.exposeService('GameService', service);
  } catch (err) {
    console.log('initMessaging error', iframeId);
    console.error(err);
  }

  return provider;
};

function GameIframe(props) {
  const { game, setLoading } = props;
  const { name, url } = game;
  iframeId = getIframeId(game);

  const [width, setWidth] = useState(window.innerWidth);

  function updateWindowDimensions() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    fullscreen = false;
    const { id } = game;
    setLoading(id, true);

    initMessaging(game, iframeId).then((provider) => {
      destroyProviders();
      providers.push(provider);
      setLoading(id, false);
    });

    return () => {
      document.removeEventListener('keydown', handlePressEsc, false);
      destroyProviders();
    };
  }, [game, setLoading]);

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);

    if (width <= 375) {
      fullscreen = false;
      handleExpandedClick();
    }

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, [width]);

  const src =
    url +
    `?iframe=${iframeId}&casinoUrl=${config.casinoUrl}` +
    (config.isDev ? `&${new Date().getTime()}` : '');

  return (
    <React.Fragment>
      <Helmet>
        <meta property='og:title' content={`Trustbet - ${name}`} />
        <title>Trustbet - {name}</title>
      </Helmet>
      <GameIframeWindow name={name} onExpand={handleExpandedClick}>
        <GameIframeLoader />
        <IframeComponent title={name} id={iframeId} src={src} />
      </GameIframeWindow>
    </React.Fragment>
  );
}

export default withStyles(styles)(GameIframe);
