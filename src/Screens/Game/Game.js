import React from 'react';
import Header from 'Components/Header';
import GameQuery from './Components/GameQuery';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Modals from 'Components/Modals';

const styles = (theme) => ({
  content: {
    background: theme.palette.content.main,
    position: 'relative',
  },
});

function Game(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Header />
      <Box component='main' className={classes.content}>
        <GameQuery />
      </Box>
      <Modals />
    </React.Fragment>
  );
}

export default withStyles(styles)(Game);
