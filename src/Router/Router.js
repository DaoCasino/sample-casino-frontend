import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import routes from './Routes';
import theme from 'Config/AppTheme';
import styledTheme from 'Styles/theme';

const renderRoute = (route, index) => {
  const { exact, path, component } = route;
  return (
    <Route
      key={`route:${index}`}
      exact={exact}
      path={path}
      component={component}
    />
  );
};

const renderRoutes = ({ location }) => {
  return (
    <Switch location={location}>
      {routes.map(renderRoute)}
      <Redirect push to='/' />
    </Switch>
  );
};

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

function Routes(props) {
  const { tokens, auth, checkWalletToken } = props;
  useEffect(() => {
    if (tokens) {
      auth(tokens);
    } else {
      checkWalletToken();
    }
  }, []);

  return (
    <ThemeProvider theme={styledTheme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop>
          <Route render={renderRoutes} />
        </ScrollToTop>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default Routes;
export { routes };
