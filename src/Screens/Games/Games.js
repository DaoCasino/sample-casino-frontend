import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { GamesQuery, SessionsQuery } from './Components';
import AdvantageBox from './Components/AdvantageBox';
import Section from 'Components/Section';
import { Slider } from './Components/Slider';
import { Helmet } from 'react-helmet';
import Wrapper from 'Components/Wrapper';
import Modals from 'Components/Modals';

import { styles } from './GamesStyles';

function Games(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Helmet>
        <title>Sample Casino Main Page</title>
      </Helmet>
      <Header />
      <Box component='main' className={classes.content}>
        <Container classes={{ maxWidthLg: classes.container }}>
          <Slider />
        </Container>
        <Wrapper>
          <Section title='All Games'>
            <GamesQuery />
          </Section>
          <SessionsQuery />
          <Section
            title='Welcome to Sample Casino Online'
            subtitle='Sample is a unique online casino'
          >
            <AdvantageBox />
          </Section>
        </Wrapper>
      </Box>
      <Footer />
      <Modals />
    </React.Fragment>
  );
}

export default withStyles(styles)(Games);
