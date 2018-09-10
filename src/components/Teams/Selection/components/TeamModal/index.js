import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-native-modalbox';
import { isEqual, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon, Thumbnail } from 'native-base';

import selectors from './selectors';

import styles from '../../../common/styles';

import { UppercasedText } from '../../../../common/components';

import actions from '../../../../../actions';
import images from '../../../../../static/images';
import { paths } from '../../../../../common/constants';

class TeamModal extends React.Component {
  componentWillReceiveProps(newProps) {
    const { selectedTeam, getUser, getLeague, getPlayer } = this.props;

    if (!isEqual(newProps.selectedTeam, selectedTeam) && newProps.selectedTeam && !isEmpty(newProps.selectedTeam)) {
      getPlayer(newProps.selectedTeam.captain);
      getLeague(newProps.selectedTeam.league);
    }
  }

  render() {
    const { visible, toggleModal, selectedTeam = {}, navigation, player, league } = this.props;

    return (
      <Modal
        isOpen={visible}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          {selectedTeam && visible ? (
            <React.Fragment>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => toggleModal()}>
                  <Icon style={styles.headerIcon} type="EvilIcons" name="close" />
                </TouchableOpacity>
              </View>
              <View style={styles.modalContainer}>
                <View style={styles.displayFlexCenterRow}>
                  <UppercasedText style={styles.teamModalTitle}>
                    {selectedTeam.team_name}
                  </UppercasedText>
                </View>
                <View style={styles.TeamsSelectionModalCard}>
                  <View style={styles.TeamsSelectionModalCardImage}>
                    <Image
                      style={styles.teamCardImage}
                      source={selectedTeam.team_badge ? { uri: selectedTeam.team_badge } : images.team}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.displayFlexCenterColumn}>
                    <Text style={styles.TeamsSelectionModalDetailsText}>
                      {`${selectedTeam.players} Baller${selectedTeam.players > 1 ? 's' : ''}`}
                    </Text>
                  </View>
                  <View style={styles.displayFlexCenterColumn}>
                    {selectedTeam.league && (
                      <View style={styles.teamModalLeagueContainer}>
                        <Thumbnail style={styles.thumbnailProp} small source={league.league_logo ? { uri: league.league_logo } : images.league} />
                        <Text style={styles.teamModalLeague}>
                          {league.league_name}
                        </Text>
                      </View>
                    )}
                    <View style={styles.teamModalProps}>
                      <Thumbnail style={styles.thumbnailProp} small source={player.user && player.user.profile_image ? { uri: player.user.profile_image } : images.user} />
                      <Text style={styles.teamModalLeague}>
                        {`${player.user && player.user.first_name} ${player.user && player.user.last_name}`}
                          (Captain)
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.footerModal}>
                <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsJoin, { team: selectedTeam, players: selectedTeam.players })} style={styles.footerButtonModal}>
                  <UppercasedText style={styles.bottomMainButtonTextModal}>
                    I play for this team
                  </UppercasedText>
                </TouchableOpacity>
              </View>
            </React.Fragment>
          )
            : null
    }
        </View>
      </Modal>
    );
  }
}

TeamModal.defaultProps = {
  selectedTeam: undefined,
};

TeamModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  selectedTeam: PropTypes.shape({}),
  toggleModal: PropTypes.func.isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.user,
    ...actions.player,
    ...actions.league,
  },
)(TeamModal);
