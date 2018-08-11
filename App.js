import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Home } from './src/components';
import { initialRoute } from './src/common/constants';

const Router = createStackNavigator({
  Home,
}, {
  initialRouteName: initialRoute,
});

const App = () => <Router />;

export default App;
