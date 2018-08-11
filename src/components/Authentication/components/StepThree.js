import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import styles from '../common/styles';
import images from '../../../static/images';

const First = () => (
  <ImageBackground
    source={images.authBg3}
    style={styles.backgroundImageSize}
    imageStyle={styles.backgroundImageStyle}
  >
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.logo}
            source={images.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.display1}>
            Build your rep...
          </Text>
        </View>
      </View>
    </View>
  </ImageBackground>
);

export default First;
