import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

import styles from '../common/styles';
import images from '../../../static/images';

const Welcome = () => (
  <ImageBackground
    source={images.authBg4}
    style={styles.backgroundImageSize}
    imageStyle={styles.backgroundImageStyle}
  >
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.logoWelcome}
            source={images.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.display1Welcome}>
            Welcome to baller Profile
          </Text>
          <Text style={styles.subheadingWelcome}>
            Find the hottest talent outside of pro sports!
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>
              Sign Up ASAP
            </Text>
          </TouchableOpacity>
          <Text style={styles.subeading2Welcome}>
            Already have a BallerProfile?
          </Text>
          <Text style={styles.loginLink}>
            Login
          </Text>
        </View>
      </View>
    </View>
  </ImageBackground>
);

export default Welcome;
