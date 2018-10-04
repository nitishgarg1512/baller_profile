import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import actions from '../../../actions';

import styles from './styles';

import images from '../../../static/images';

import { ConnectionView } from '../ConnectionsView/components';

const FirstRoute = (toggleFollow, state, nationalityPlayers) => (
  <View style={styles.playerCardContainer}>
    {nationalityPlayers.map(player => (
      <ConnectionView id={player.id} />
    ))}
  </View>
);

class NationalityView extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={styles.navigationText}>
        Nationality
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
      nationalityPlayers: [],
      secondNationalityPlayers: [],
      routes: [
        { key: 'first', title: props.navigation.getParam('nationality') },
        { key: 'second', title: props.navigation.getParam('second_nationality') },
      ],
      1: true,
      2: false,
      3: false,
    };
  }

  componentDidMount() {
    const { getPlayersConnectionsByNation, navigation } = this.props;

    getPlayersConnectionsByNation(navigation.getParam('nationality2'))
      .then(({ result }) => this.setState({ nationalityPlayers: result.data }), () => {
        getPlayersConnectionsByNation(navigation.getParam('second_nationality2'))
          .then(({ result }) => this.setState({ secondNationalityPlayers: result.data }));
      });
  }

  toggleFollow = (id) => {
    this.setState({
      [id]: !this.state[id],
    });
  }

  render() {
    const { index, routes, secondNationalityPlayers, nationalityPlayers } = this.state;

    return (
      <TabView
        navigationState={this.state}
        tabStyle={styles.bgWhite}
        renderScene={SceneMap({
          first: () => FirstRoute(this.toggleFollow, this.state, nationalityPlayers),
          second: () => FirstRoute(this.toggleFollow, this.state, secondNationalityPlayers),
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={(labelProps) => {
              const { route: { key, title } } = labelProps;

              let flag = '';

              if (key === 'first') {
                flag = 'spain';
              }
              if (key === 'second') {
                flag = 'england';
              }

              return (
                <View style={styles.flexCenterColumn}>
                  <Text style={routes[index].key === key ? styles.activeTab : styles.disabledTab}>
                    {title}
                  </Text>
                  <Image
                    style={styles.h25w25}
                    resizeMode="contain"
                    source=""
                  />
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

export default connect(
  null,
  {
    ...actions.players,
  },
)(NationalityView);
