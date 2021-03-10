import React, { useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useFixWindowHeight } from 'Utils/FixWindowHeight';

import routes from './Routes';
import theme from 'Config/AppTheme';
import styledTheme from 'Styles/theme';

import Loading from 'Screens/Loading';

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
    <Suspense fallback={<Loading />}>
      <Switch location={location}>
        {routes.map(renderRoute)}
        <Redirect push to='/' />
      </Switch>
    </Suspense>
  );
};

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // fix height for iphone
  useFixWindowHeight(pathname);

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
  }, [tokens, auth, checkWalletToken]);

  return (
    <ThemeProvider theme={styledTheme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop {...props}>
          <Route render={renderRoutes} />
        </ScrollToTop>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default Routes;
export { routes };
