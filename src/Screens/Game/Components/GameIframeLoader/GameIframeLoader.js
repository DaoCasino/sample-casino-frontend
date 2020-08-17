import React from 'react';

import {
  LoaderWrapper,
  LoaderTitle,
  LoaderProgress,
  LoaderProgressBar,
  LoaderGrid,
} from './GameIframeLoader.styled';

function GameIframeLoader(props) {
  const { loading } = props;

  if (!loading) {
    return <React.Fragment />;
  }

  console.log('render GameIframeLoader', loading);

  return (
    <LoaderWrapper loading={loading.toString()}>
      <LoaderGrid>
        <div>
          <LoaderTitle>Loading game…</LoaderTitle>
          <LoaderProgress role='progressbar'>
            <LoaderProgressBar />
            <LoaderProgressBar />
          </LoaderProgress>
        </div>
      </LoaderGrid>
    </LoaderWrapper>
  );
}

export default GameIframeLoader;
