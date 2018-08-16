import React from 'react';
import { Dimensions, Text, View, TouchableOpacity, Image } from 'react-native';
import { Thumbnail } from 'native-base';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from './styles';

import images from '../../../static/images';

const FirstRoute = () => (
  <View style={{ justifyContent: 'center', width: Dimensions.get('window').width - 25, alignItems: 'center', alignSelf: 'center', flexDirection: 'column' }}>
    <View style={{ marginTop: 10, marginBottom: 10, elevation: 1, borderRadius: 5, backgroundColor: '#fff', width: '100%', padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <View style={styles.borderRadiusCircle}>
          <Thumbnail
            style={[styles.profileImage]}
            source={images.lm}
          />
        </View>
        <View style={{ marginLeft: 10, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontFamily: 'calibri-italic', color: '#000', fontSize: 15 }}>
              Dimitri Gbo&nbsp;
            </Text>
            <Text style={{ fontFamily: 'calibri-italic', color: 'rgba(0,0,0,.3)', fontSize: 11 }}>
              @Dimzinho
            </Text>
          </View>
          <Text style={{ fontFamily: 'calibri-italic', color: 'rgba(0,0,0,.3)', fontSize: 13 }}>
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
    <View style={{ marginBottom: 10, elevation: 1, borderRadius: 5, backgroundColor: '#fff', width: '100%', padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <View style={styles.borderRadiusCircle}>
          <Thumbnail
            style={[styles.profileImage]}
            source={images.lm}
          />
        </View>
        <View style={{ marginLeft: 10, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontFamily: 'calibri-italic', color: '#000', fontSize: 15 }}>
              Mena Ntueba&nbsp;
            </Text>
            <Text style={{ fontFamily: 'calibri-italic', color: 'rgba(0,0,0,.3)', fontSize: 11 }}>
              @Menchizedek
            </Text>
          </View>
          <Text style={{ fontFamily: 'calibri-italic', color: 'rgba(0,0,0,.3)', fontSize: 13 }}>
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
    <View style={{ marginBottom: 10, elevation: 1, borderRadius: 5, backgroundColor: '#fff', width: '100%', padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <View style={styles.borderRadiusCircle}>
          <Thumbnail
            style={[styles.profileImage]}
            source={images.lm}
          />
        </View>
        <View style={{ marginLeft: 10, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontFamily: 'calibri-italic', color: '#000', fontSize: 15 }}>
              Roysten Drenthe&nbsp;
            </Text>
            <Text style={{ fontFamily: 'calibri-italic', color: 'rgba(0,0,0,.3)', fontSize: 11 }}>
              @RoysDrent
            </Text>
          </View>
          <Text style={{ fontFamily: 'calibri-italic', color: 'rgba(0,0,0,.3)', fontSize: 13 }}>
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

class NationalityView extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{ fontFamily: 'calibri', fontSize: 20, color: '#fff' }}>
        Nationality
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
        { key: 'first', title: 'Spain' },
        { key: 'second', title: 'England' },
      ],
    };
  }

  render() {
    const { index, routes } = this.state;

    return (
      <TabView
        navigationState={this.state}
        tabStyle={{ backgroundColor: '#fff' }}
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

              let flag = '';

              if (key === 'first') {
                flag = 'spain';
              }
              if (key === 'second') {
                flag = 'england';
              }

              return (
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <Text style={routes[index].key === key ? { fontFamily: 'calibri-italic', color: '#0071c0' } : { fontFamily: 'calibri-italic' }}>
                    {title}
                  </Text>
                  <Image
                    style={{ height: 25, width: 25 }}
                    resizeMode="contain"
                    source={images[flag]}
                  />
                </View>
              );
            }}
            indicatorStyle={{ backgroundColor: '#0071c0' }}
            labelStyle={{ color: '#0071c0', fontFamily: 'calibri-italic' }}
            style={{ backgroundColor: '#fff' }}
          />
        )}
        onIndexChange={changedIndex => this.setState({ index: changedIndex })}
        initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
      />
    );
  }
}

export default NationalityView;
