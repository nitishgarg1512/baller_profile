import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';

import MatchFeed from '../MatchFeed';
import Notification from '../Notification';
import Stats from '../Stats';
import Team from '../Team';

import styles from './styles';

const matchfeed = require('../../../static/images/matchfeed.png');
const team = require('../../../static/images/teams.png');
const notification = require('../../../static/images/notification.png');
const reward = require('../../../static/images/reward.png');
const menu = require('../../../static/images/menu.png');

const MainNavigator = createBottomTabNavigator(
  {
    Team,
    Stats,
    MatchFeed,
    Notification,
  },
  {
    initialRouteName: 'MatchFeed',
    tabBarComponent: (props) => {
      const { index } = props.navigation.state;
      return (
        <Footer>
          <FooterTab>
            <Button
              active={index === 0}
              onPress={() => props.navigation.navigate('Team')}>
              <Image source={team} style={styles.icoStyle} />
            </Button>
            <Button
              active={index === 1}
              onPress={() => props.navigation.navigate('Stats')}>
              <Image source={reward} style={styles.icoStyle} />
            </Button>
            <Button
              active={index === 2}
              onPress={() => props.navigation.navigate('MatchFeed')}>
              <Image source={matchfeed} style={styles.icoStyle} />
            </Button>
            <Button
              active={index === 3}
              onPress={() => props.navigation.navigate('Notification')}>
              <Image source={notification} style={styles.icoStyle} />
            </Button>
            <Button
              active={index === 4}>
              <Image source={menu} style={styles.icoStyle} />
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  }
);

export default MainNavigator;
