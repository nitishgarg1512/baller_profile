import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';

import MatchFeed from '../MatchFeed';
import Notification from '../Notification';
import Stats from '../Stats';
import Team from '../Team';

const MainNavigator = createBottomTabNavigator(
  {
    Team,
    Stats,
    MatchFeed,
    Notification,
  },
  {
    tabBarComponent: (props) => {
      const { index } = props.navigation.state;
      return (
        <Footer>
          <FooterTab>
            <Button
              active={index === 0}
              onPress={() => props.navigation.navigate('Team')}>
              <Icon type="FontAwesome" name="users" />
            </Button>
            <Button
              active={index === 1}
              onPress={() => props.navigation.navigate('Stats')}>
              <Icon type="FontAwesome" name="trophy" />
            </Button>
            <Button
              active={index === 2}
              onPress={() => props.navigation.navigate('MatchFeed')}>
              <Icon type="FontAwesome" name="address-card" />
            </Button>
            <Button
              active={index === 3}
              onPress={() => props.navigation.navigate('Notification')}>
              <Icon type="FontAwesome" name="bell" />
            </Button>
            <Button
              active={index === 4}>
              <Icon name="menu" />
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

export default MainNavigator;
