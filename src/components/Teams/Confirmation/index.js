import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Container, Icon, Content } from 'native-base';

import selectors from './selectors';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import actions from '../../../actions';
import { paths } from '../../../common/constants';
import images from '../../../static/images';

class Confirmation extends React.Component {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    const { navigation, getTeam, getAuthUser } = this.props;
    const id = navigation.getParam('id');

    Promise.all([
      getTeam(id),
      getAuthUser(),
    ]);
  }

  render() {
    const { navigation, team, isLoading, user } = this.props;

    let content = <ActivityIndicator />;

    if (isLoading) {
      content = <ActivityIndicator />;
    }

    if (!isLoading && Object.keys(team).length > 0 && user) {
      content = (
        <Container>
          <Content>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={styles.headerIcon} type="EvilIcons" name="close" />
              </TouchableOpacity>
            </View>
            <View style={styles.displayFlexCenterRow}>
              <UppercasedText style={styles.TeamsSelectionTitle}>
                {team && team.team_name ? team.team_name : ''}
              </UppercasedText>
            </View>
            <View style={styles.TeamsConfirmationPicContainer}>
              <Image
                style={styles.teamCardImage}
                source={images.hashtag2}
                resizeMode="contain"
              />
            </View>
            <View style={styles.TeamsConfirmationMessageContainer}>
              <Text style={styles.TeamsConfirmationMainText}>
                Congrats&nbsp;
                {user && user.first_name && user.first_name.length > 0 ? user.first_name.length : user.username}
                ,
              </Text>
              <Text style={styles.TeamsConfirmationSecondaryText}>
                You are now the Captain and Admin of&nbsp;
                {team.team_name}
                !
              </Text>
            </View>
            <View style={[styles.inviteBallersContainer, styles.mt70]}>
              <TouchableOpacity style={styles.inviteBallersButton}>
                <UppercasedText style={styles.inviteBallersButtonText}>
                  Invite ballers
                </UppercasedText>
              </TouchableOpacity>
              <Text style={styles.inviteBallersText}>
                Even Messi needs his teammates!
              </Text>
            </View>
          </Content>
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsView, { id: team.id })} style={styles.footerButton}>
              <UppercasedText style={styles.bottomMainButtonTextConfirmation}>
                Done
              </UppercasedText>
            </TouchableOpacity>
          </View>
        </Container>
      );
    }

    return content;
  }
}

Confirmation.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.team,
    ...actions.user,
  },
)(Confirmation);
