import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Thumbnail, Icon } from 'native-base';
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
            source={images.diego}
          />
        </View>
        <View style={styles.playerCardName}>
          <View style={styles.flexCenterRow}>
            <Text style={styles.nameText}>
              Diego Costa&nbsp;
            </Text>
            <Text style={styles.tagText}>
              @DCosta15
            </Text>
          </View>
          <Text style={styles.descText}>
            Central Attacking Midfielder
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
            source={images.andres}
          />
        </View>
        <View style={styles.playerCardName}>
          <View style={styles.flexCenterRow}>
            <Text style={styles.nameText}>
              Andres Iniesta&nbsp;
            </Text>
            <Text style={styles.tagText}>
              @AndIniesta
            </Text>
          </View>
          <Text style={styles.descText}>
            Centre Midfielder
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
            source={images.alvaro}
          />
        </View>
        <View style={styles.playerCardName}>
          <View style={styles.flexCenterRow}>
            <Text style={styles.nameText}>
              Alvaro Morata&nbsp;
            </Text>
            <Text style={styles.tagText}>
              @AlMorata
            </Text>
          </View>
          <Text style={styles.descText}>
            Striker
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

const SecondRoute = () => (
  <View style={styles.invitePlayersContainer}>
    <ScrollView>
      <View style={styles.invitePlayersTitleContainer}>
        <Text style={styles.titleText}>
          Strengthen your squad by inviting players to join your team.
        </Text>
        <Text style={styles.secondaryText}>
          Tap up players already on BallerProfile!
        </Text>
        <Icon name="plus" style={styles.plusIcon} type="EvilIcons" />
      </View>
      <View style={styles.hrLineSecondary} />
      <View style={styles.invitePlayersSecondaryContainer}>
        <Text style={styles.addPlayersText}>
          Add players to your squad via social media
        </Text>
        <View style={styles.iconsContainer}>
          <Image
            source={images.whatsapp}
            style={styles.h60w60}
            resizeMode="contain"
          />
          <Image
            source={images.twitter2}
            style={[styles.h60w60, styles.mx40]}
            resizeMode="contain"
          />
          <Image
            source={images.insta2}
            style={styles.h60w60}
            resizeMode="contain"
          />
        </View>
      </View>
    </ScrollView>
  </View>
);

class Squad extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={styles.navigationText}>
        Strictly Ballers
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
        { key: 'first', title: 'Current squad' },
        { key: 'second', title: 'Invite players' },
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
          second: SecondRoute,
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={(labelProps) => {
              const { route: { key, title } } = labelProps;

              let statisticsContent = '';

              if (key === 'first') {
                statisticsContent = '14';
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

export default Squad;
