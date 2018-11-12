import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import { connect } from 'react-redux';

import selectors from './selectors';

import styles from '../../styles';

import { paths } from '../../../../../common/constants';

import actions from '../../../../../actions';

import images from '../../../../../static/images';

class ConnectionView extends React.Component {
  constructor() {
    super();

    this.state = {
      player: {},
      following: null,
    };
  }

  componentDidMount() {
    const { player, authPlayer } = this.props;
    const following = player && player.user && authPlayer.following && authPlayer.following.find(p => p.user.id === player.user.id);
    this.setState({ player, following });
  }

  handleVisitProfile = () => {
    const { navigation } = this.props;
    const { player } = this.state;

    if (player.nationality) {
      navigation.push(paths.client.ProfilesView, { id: player.id });
    }
  }

  handleCreateRelationship = () => {
    const { getPlayerConnection, createRelationship, deleteRelationship, id, authPlayer, player, getAuthPlayer } = this.props;

    if (player && player.user && authPlayer.following && authPlayer.following.find(p => p.user.id === player.user.id)) {
      deleteRelationship(id)
        .then(() => {
          this.setState({ following: false });
        });
    } else {
      createRelationship(id)
        .then(() => {
          this.setState({ following: true });
        });
    }

    getAuthPlayer(authPlayer.user.username);
  }

  render() {
    const { authPlayer } = this.props;
    const { player, following } = this.state;

    const position = player.playing_position ? player.playing_position.playing_position : 'No position';
    const team = player.main_team ? `for ${player.main_team.team_name}` : '';

    const position_team = `${position} ${team}`;

    const btnFollow = player && player.user && player.user.id === authPlayer.user.id ? null : (
      <TouchableOpacity onPress={this.handleCreateRelationship} style={[!following ? styles.playerFollowButton : styles.playerFollowingButton]}>
        <Text style={!following ? styles.playerFollowButtonText : styles.playerFollowingButtonText}>
          {!following ? 'Follow' : 'Following'}
        </Text>
      </TouchableOpacity>
    );

    return (
      <View style={styles.playerCard}>
        <View style={styles.flexCenterRow}>
          <View style={styles.borderRadiusCircle}>
            <TouchableOpacity onPress={() => this.handleVisitProfile()}>
              <Thumbnail
                style={[styles.profileImage]}
                source={(player && player.user && player.user.profile_image) || images.user}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.playerCardName}>
            <View style={styles.flexCenterRow}>
              <Text style={styles.nameText}>
                {player.user && player.user.first_name} {player.user && player.user.last_name}&nbsp;
              </Text>
              <Text style={styles.tagText}>
                {player.user && `@${player.user.username}`}
              </Text>
            </View>
            <Text style={styles.descText}>
              {position_team}
            </Text>
          </View>
        </View>
        {btnFollow}
      </View>
    );
  }
}

ConnectionView.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.player,
    ...actions.relationship,
  },
)(ConnectionView);
