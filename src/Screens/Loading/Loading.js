import React from 'react';
import Header from 'Components/Header';
import styled from 'styled-components';

import {
  LoaderTitle,
  LoaderProgress,
  LoaderProgressBar,
  LoaderGrid,
} from 'Screens/Game/Components/GameIframeLoader/GameIframeLoader.styled';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  header,
  main {
    grid-row: auto;
  }
`;

function Loading() {
  return (
    <Wrapper>
      <Header />
      <main>
        <LoaderGrid>
          <div>
            <LoaderTitle>Loading page…</LoaderTitle>
            <LoaderProgress role='progressbar'>
              <LoaderProgressBar />
              <LoaderProgressBar />
            </LoaderProgress>
          </div>
        </LoaderGrid>
      </main>
    </Wrapper>
  );
}

export default Loading;
