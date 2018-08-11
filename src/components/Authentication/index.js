import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import actions from '../../actions';
import images from '../../static/images';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.9)',
    display: 'flex',
  },
  display1: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  flexContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 30,
  },
  headerContainer: {
    flex: 1,
    paddingTop: 70,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
};

class Authentication extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <ImageBackground
        source={images.authBg1}
        style={{
          width: '100%',
          height: '100%',
        }}
        imageStyle={{
          resizeMode: 'cover',
        }}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Image
              style={{ flex: 1, height: 130, width: 130 }}
              source={images.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.flexContainer}>
            <Text style={styles.display1}>
              Play ball...
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Text style={{ color: '#fff', flex: 0.25, alignItems: 'center', textAlign: 'center', textTransform: 'uppercase', fontSize: 18 }}>
                Skip
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default connect(
  null,
  {
    ...actions.authentication,
  },
)(Authentication);
