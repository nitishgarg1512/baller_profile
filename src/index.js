import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Welcome, Authentication } from './components';
import { initialRoute } from './common/constants';
import { reducers, middleware } from './store';

const Router = createStackNavigator({
  Welcome,
  Login: Authentication.Login,
}, {
  initialRouteName: initialRoute,
});

const store = createStore(reducers, applyMiddleware(thunk, middleware()));

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
