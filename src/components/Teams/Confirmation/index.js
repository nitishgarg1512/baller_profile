import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Icon, Content } from 'native-base';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import images from '../../../static/images';

class Confirmation extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Content style={styles.marginBottom50}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon style={styles.headerIcon} type="EvilIcons" name="close" />
            </TouchableOpacity>
          </View>
          <View style={styles.displayFlexCenterRow}>
            <UppercasedText style={styles.teamSelectionTitle}>
              NEWTEAM UNITED
            </UppercasedText>
          </View>
          <View style={styles.teamConfirmationPicContainer}>
            <Image
              style={styles.teamCardImage}
              source={images.hashtag2}
              resizeMode="contain"
            />
          </View>
          <View style={styles.teamConfirmationMessageContainer}>
            <Text style={styles.teamConfirmationMainText}>
              Congrats Dimitri,
            </Text>
            <Text style={styles.teamConfirmationSecondaryText}>
              You are now the Captain and Admin of Newteam United!
            </Text>
          </View>
        </Content>
        <View style={styles.inviteBallersContainer}>
          <TouchableOpacity style={styles.inviteBallersButton}>
            <UppercasedText style={styles.inviteBallersButtonText}>
              Invite ballers
            </UppercasedText>
          </TouchableOpacity>
          <Text style={styles.inviteBallersText}>
            Even Messi needs his teammates!
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <UppercasedText style={styles.bottomMainButtonTextConfirmation}>
              Done
            </UppercasedText>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

Confirmation.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Confirmation;
