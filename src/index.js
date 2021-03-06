import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Welcome, Authentication, Teams, Profiles, Root, Main, Notification } from './components';
import { initialRoute } from './common/constants';
import { reducers, middleware } from './store';

const AppRouter = createStackNavigator({
  Welcome,
  Login: Authentication.Login,
  Registration: Authentication.Registration,
}, {
    initialRouteName: 'Welcome',
  });

const AuthRouter = createStackNavigator({
  TeamsSelection: Teams.Selection,
  TeamsCreation: Teams.Creation,
  TeamsConfirmation: Teams.Confirmation,
  TeamsJoin: Teams.Join,
  ProfilesCreation: Profiles.Creation,
  TeamsNotified: Teams.Notified,
  WhatsNext: Teams.WhatsNext,
  ProfilesView: Profiles.View,
  ProfilesConnections: Profiles.ConnectionsView,
  ProfilesNationality: Profiles.NationalityView,
  ProfilesRating: Profiles.Rating,
  ProfilesSetting: Profiles.Setting,
  ProfilesStats: Profiles.Stats,
  TeamsView: Teams.View,
  TeamsSquad: Teams.Squad,
  MatchCreation: Teams.MatchCreation,
  Notification,
  MainScreen: {
    screen: Main.MainNavigator,
    navigationOptions: {
      header: null,
    },
  },
  MatchPost: {
    screen: Main.MatchPost,
    navigationOptions: {
      header: null,
    },
  },
}, {
    initialRouteName: 'MainScreen',
  });

const InitialRouter = createSwitchNavigator({
  RouterSelection: Authentication.Selection,
  Auth: AuthRouter,
  App: AppRouter,
}, {
    initialRouteName: 'RouterSelection',
  });

const store = createStore(reducers, applyMiddleware(thunk, middleware()));

const App = () => (
  <Provider store={store}>
    <Root>
      <InitialRouter />
    </Root>
  </Provider>
);

export default App;
