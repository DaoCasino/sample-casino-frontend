import React from 'react';
import { Layout } from 'Components/Layout';
import { Icon } from 'Components/Icon';
import { Link } from 'react-router-dom';
import Wrapper from 'Components/Wrapper';

import {
  EmbededWrapper,
  EmbededToolbar,
  EmbededToolbarTitle,
  EmbededIconButton,
  EmbededContent,
} from './GameIframeStyles';

function GameIframeWindow(props) {
  const { children, onExpand, name } = props;

  return (
    <Wrapper>
      <EmbededWrapper>
        <EmbededToolbar>
          <EmbededToolbarTitle>{name}</EmbededToolbarTitle>
          <Layout align='end center'>
            {onExpand && (
              <EmbededIconButton onClick={onExpand}>
                <Icon icon='expand' size={18} />
              </EmbededIconButton>
            )}
            <Link to={'/'}>
              <EmbededIconButton>
                <Icon icon='close' size={12} />
              </EmbededIconButton>
            </Link>
          </Layout>
        </EmbededToolbar>
        <EmbededContent id='embeded-content' style={{ position: 'relative' }}>
          {children}
        </EmbededContent>
      </EmbededWrapper>
    </Wrapper>
  );
}

export default GameIframeWindow;
