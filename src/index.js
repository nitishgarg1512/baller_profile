import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Welcome, Authentication, Teams, Profiles } from './components';
import { initialRoute } from './common/constants';
import { reducers, middleware } from './store';

const Router = createStackNavigator({
  Welcome,
  Login: Authentication.Login,
  Registration: Authentication.Registration,
  TeamsSelection: Teams.Selection,
  TeamsCreation: Teams.Creation,
  TeamsConfrimation: Teams.Confirmation,
  TeamsJoin: Teams.Join,
  ProfilesCreation: Profiles.Creation,
  TeamsNotified: Teams.Notified,
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
