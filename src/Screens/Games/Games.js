import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { SessionsQuery } from './Components';
import GamesQueryNew from './Components/v2/GamesQuery';
import AdvantageBox from './Components/AdvantageBox';
import Section from 'Components/Section';
import { Slider } from './Components/Slider';
import Wrapper from 'Components/Wrapper';

import WithFooter from '../hocs/WithFooter';
import seo from './seo';

import { styles } from './GamesStyles';

function Games(props) {
  const { classes } = props;
  return (
    <WithFooter {...seo} inner={false}>
      <Container classes={{ maxWidthLg: classes.container }}>
        <Slider />
      </Container>
      <Wrapper>
        <Section title='Games'>
          <GamesQueryNew />
        </Section>
        <SessionsQuery />
        <Section
          title='Welcome to Sample Casino Online'
          subtitle='Sample is a unique online casino'
        >
          <AdvantageBox />
        </Section>
      </Wrapper>
    </WithFooter>
  );
}

export default withStyles(styles)(Games);
