import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'native-base';

import selectors from './selectors';
import styles from './styles';

import { UppercasedText } from '../../common/components';

import actions from '../../../actions';
import images from '../../../static/images';

import { paths } from '../../../common/constants';

class WhatsNext extends React.Component {
  static navigationOptions = {
    header: null,
  }

  handleVisitProfile = () => {
    const { getPlayerByUsername, authUser, navigation } = this.props;

    getPlayerByUsername(authUser.username)
      .then((player) => {
        if (player.result.data[0].nationality) {
          navigation.navigate(paths.client.ProfilesView, { id: player.result.data[0].id });
        } else {
          navigation.navigate(paths.client.ProfilesCreation);
        }
      })
      .catch(() => navigation.navigate(paths.client.ProfilesCreation));
  }

  render() {
    const { navigation } = this.props;

    return (
      <ImageBackground
        source={images.authBg1}
        style={styles.backgroundImageSize}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <Image
                style={styles.logoWelcome}
                source={images.logo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.flex025}>
              <UppercasedText style={[styles.display1Welcome]}>
                Whats next?
              </UppercasedText>
            </View>
            <View style={[styles.buttonContainer, styles.flex1]}>
              <TouchableOpacity style={styles.submitButton}>
                <UppercasedText style={styles.submitButtonText}>
                  Why use BallerProfile?
                </UppercasedText>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.handleVisitProfile()} style={[styles.submitButton, styles.my20, styles.backgroundRed]}>
                <UppercasedText style={styles.submitButtonText}>
                  Visit my profile page
                </UppercasedText>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.push(paths.client.TeamsCreation)} style={[styles.submitButton, styles.backgroundWhite]}>
                <UppercasedText style={[styles.submitButtonText, styles.colorBlack]}>
                  Create a fantasy team
                </UppercasedText>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={[styles.headerCloseContainer]}>
            <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsSelection)}>
              <Icon style={styles.headerIcon} type="EvilIcons" name="close" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

WhatsNext.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.player,
  },
)(WhatsNext);
