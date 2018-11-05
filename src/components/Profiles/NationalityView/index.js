import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import actions from '../../../actions';
import selectors from './selectors';

import styles from './styles';

import images from '../../../static/images';

import { ConnectionView } from '../ConnectionsView/components';

const FirstRoute = (toggleFollow, state, nationalityPlayers, authUser) => (
  <ScrollView>
    <View style={styles.playerCardContainer}>
      {nationalityPlayers
        .filter(player => player.user.id !== authUser.pk)
        .map(player => (
          <ConnectionView id={player.id} player={player} key={player.id} />
        ))}
    </View>
  </ScrollView>
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
        { key: 'first', title: props.navigation.getParam('country'), flag: props.navigation.getParam('flag') },
        { key: 'second', title: props.navigation.getParam('second_country'), flag: props.navigation.getParam('second_flag') },
      ],
      1: true,
      2: false,
      3: false,
    };

    this.getPlayers = this.getPlayers.bind(this);
  }

  componentDidMount() {
    const { index } = this.state;

    this.getPlayers(index);
  }

  getPlayers(index) {
    const { getPlayersConnectionsByNation, navigation, authUser } = this.props;

    if (!index) {
      getPlayersConnectionsByNation(navigation.getParam('nationality'))
        .then(({ result }) => {
          this.setState({ nationalityPlayers: result.data });
        }).catch(error => console.log(error));
    } else {
      getPlayersConnectionsByNation(navigation.getParam('second_nationality'))
        .then(({ result }) => {
          this.setState({ secondNationalityPlayers: result.data });
        }).catch(error => console.log(error));
    }
  }

  toggleFollow = (id) => {
    this.setState({
      [id]: !this.state[id],
    });
  }

  render() {
    const { index, routes, secondNationalityPlayers, nationalityPlayers } = this.state;
    const { authUser } = this.props;

    return (
      <TabView
        navigationState={this.state}
        tabStyle={styles.bgWhite}
        renderScene={SceneMap({
          first: () => FirstRoute(this.toggleFollow, this.state, nationalityPlayers, authUser),
          second: () => FirstRoute(this.toggleFollow, this.state, secondNationalityPlayers, authUser),
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={(labelProps) => {
              const { route: { key, title, flag } } = labelProps;

              return (
                <View style={styles.flexCenterColumn}>
                  <Text style={routes[index].key === key ? styles.activeTab : styles.disabledTab}>
                    {title}
                  </Text>
                  <Image
                    style={styles.h25w25}
                    resizeMode="contain"
                    source={flag ? { uri: flag } : ''}
                  />
                </View>
              );
            }}
            indicatorStyle={styles.bgBlue}
            labelStyle={styles.labelText}
            style={styles.bgWhite}
          />
        )}
        onIndexChange={changedIndex => this.setState({ index: changedIndex }, this.getPlayers(changedIndex))}
        initialLayout={styles.h100w100}
      />
    );
  }
}

export default connect(
  selectors,
  {
    ...actions.players,
    ...actions.user,
  },
)(NationalityView);
