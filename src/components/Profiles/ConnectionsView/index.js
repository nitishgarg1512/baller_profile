import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from './styles';
import { ConnectionView } from './components';

import images from '../../../static/images';

const FirstRoute = (toggleFollow, state, player) => (
  <View style={styles.playerCardContainer}>
    {player && player.followers && player.followers.map(id => (
      <ConnectionView id={id} />
    ))}
  </View>
);

const SecondRoute = (toggleFollow, state, player) => (
  <View style={styles.playerCardContainer}>
    {player && player.following && player.following.map(id => (
      <ConnectionView id={id} />
    ))}
  </View>
);

const ThirdRoute = (toggleFollow, state, player) => (
  <View style={styles.playerCardContainer} />
);

class ConnectionsView extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={styles.navigationText}>
        Connections
      </Text>
    ),
    headerStyle: {
      backgroundColor: '#0071c0',
    },
    headerTintColor: 'white',
  }

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      player: props.navigation.getParam('player'),
      routes: [
        { key: 'first', title: 'Followers' },
        { key: 'second', title: 'Following' },
        { key: 'third', title: 'Selected' },
      ],
      1: false,
      2: false,
      3: false,
    };
  }

  toggleFollow = (id) => {
    this.setState({
      [id]: !this.state[id],
    });
  }

  render() {
    const { index, routes, player } = this.state;

    return (
      <TabView
        navigationState={this.state}
        tabStyle={styles.bgWhite}
        renderScene={SceneMap({
          first: () => FirstRoute(this.toggleFollow, this.state, player),
          second: () => SecondRoute(this.toggleFollow, this.state, player),
          third: () => ThirdRoute(this.toggleFollow, this.state),
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={(labelProps) => {
              const { route: { key, title } } = labelProps;

              let statisticsContent = '';

              if (key === 'first') {
                statisticsContent = player && player.followers && player.followers.length;
              }
              if (key === 'second') {
                statisticsContent = player && player.following && player.following.length;
              }
              if (key === 'third') {
                statisticsContent = '0';
              }

              return (
                <View style={styles.flexCenterColumn}>
                  <Text style={routes[index].key === key ? styles.activeTab : styles.disabledTab}>
                    {title}
                  </Text>
                  <Text style={routes[index].key === key ? styles.activeTab : styles.disabledTab}>
                    {statisticsContent}
                  </Text>
                </View>
              );
            }}
            indicatorStyle={styles.bgBlue}
            labelStyle={styles.labelText}
            style={styles.bgWhite}
          />
        )}
        onIndexChange={changedIndex => this.setState({ index: changedIndex })}
        initialLayout={styles.h100w100}
      />
    );
  }
}

export default ConnectionsView;
