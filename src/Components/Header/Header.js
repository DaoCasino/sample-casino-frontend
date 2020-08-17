import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountInfo from 'Components/AccountInfo';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const styles = (theme) => ({
  header: {
    backgroundColor: theme.palette.header.main,
  },
  container: {
    maxWidth: '1440px',
  },
});

const AppLogoWrapper = styled.div`
  flex-grow: 1;
  ${({ theme: { media } }) => media.lessThan('xs_gt')`
  padding-right: 16px;
  svg {
    width: 100%;
  }`}
`;

const Logo = styled.div`
  font-family: Gilroy;
  font-size: 32px;
  font-weight: 600;
  color: #fff;
`;

const AppLogo = () => (
  <AppLogoWrapper>
    <Link
      to={'/'}
      data-test={'btn-home'}
      style={{ display: 'inline-block', textDecoration: 'none' }}
    >
      <Logo>SAMPLE</Logo>
      {/* <Icon icon='logo' size={135} /> */}
    </Link>
  </AppLogoWrapper>
);

function Header(props) {
  const { classes } = props;
  console.log('render Header');
  return (
    <AppBar
      position='sticky'
      color='primary'
      classes={{ colorPrimary: classes.header }}
    >
      <Container classes={{ maxWidthLg: classes.container }}>
        <Toolbar disableGutters={true}>
          <AppLogo />
          <AccountInfo />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default withStyles(styles)(Header);
