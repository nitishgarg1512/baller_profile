import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from './styles';

import images from '../../../static/images';

const FirstRoute = () => (
  <View style={styles.playerCardContainer}>
    <View style={styles.playerCard}>
      <View style={styles.flexCenterRow}>
        <View style={styles.borderRadiusCircle}>
          <Thumbnail
            style={[styles.profileImage]}
            source={images.lm}
          />
        </View>
        <View style={styles.playerCardName}>
          <View style={styles.flexCenterRow}>
            <Text style={styles.nameText}>
              Dimitri Gbo&nbsp;
            </Text>
            <Text style={styles.tagText}>
              @Dimzinho
            </Text>
          </View>
          <Text style={styles.descText}>
            CDM for Strictly Ballers
          </Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.playerFollowingButton]}>
        <Text style={styles.playerFollowingButtonText}>
          Following
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.playerCard}>
      <View style={styles.flexCenterRow}>
        <View style={styles.borderRadiusCircle}>
          <Thumbnail
            style={[styles.profileImage]}
            source={images.lm}
          />
        </View>
        <View style={styles.playerCardName}>
          <View style={styles.flexCenterRow}>
            <Text style={styles.nameText}>
              Mena Ntueba&nbsp;
            </Text>
            <Text style={styles.tagText}>
              @Menchizedek
            </Text>
          </View>
          <Text style={styles.descText}>
            CM for Strictly Ballers
          </Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.playerFollowButton]}>
        <Text style={styles.playerFollowButtonText}>
          Follow
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.playerCard}>
      <View style={styles.flexCenterRow}>
        <View style={styles.borderRadiusCircle}>
          <Thumbnail
            style={[styles.profileImage]}
            source={images.lm}
          />
        </View>
        <View style={styles.playerCardName}>
          <View style={styles.flexCenterRow}>
            <Text style={styles.nameText}>
              Roysten Drenthe&nbsp;
            </Text>
            <Text style={styles.tagText}>
              @RoysDrent
            </Text>
          </View>
          <Text style={styles.descText}>
            ST for Madridista
          </Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.playerFollowButton]}>
        <Text style={styles.playerFollowButtonText}>
          Follow
        </Text>
      </TouchableOpacity>
    </View>
  </View>
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

  constructor() {
    super();

    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Followers' },
        { key: 'second', title: 'Following' },
        { key: 'third', title: 'Selected' },
      ],
    };
  }

  render() {
    const { index, routes } = this.state;

    return (
      <TabView
        navigationState={this.state}
        tabStyle={styles.bgWhite}
        renderScene={SceneMap({
          first: FirstRoute,
          second: FirstRoute,
          third: FirstRoute,
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={(labelProps) => {
              const { route: { key, title } } = labelProps;

              let statisticsContent = '';

              if (key === 'first') {
                statisticsContent = '2330';
              }
              if (key === 'second') {
                statisticsContent = '211';
              }
              if (key === 'third') {
                statisticsContent = '1001';
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
