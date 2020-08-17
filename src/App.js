import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from 'Router';
import config from 'Config/AppConfig';

import 'sanitize.css/sanitize.css';
import './App.css';

import createStore from './Stores';

console.log({ config });
const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
