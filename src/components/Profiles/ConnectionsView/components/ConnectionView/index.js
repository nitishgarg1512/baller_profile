import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import { connect } from 'react-redux';

import selectors from './selectors';

import styles from '../../styles';

import actions from '../../../../../actions';

import images from '../../../../../static/images';

class ConnectionView extends React.Component {
  constructor() {
    super();

    this.state = {
      player: {},
    };
  }

  componentDidMount() {
    const { player, navigation, getPlayer, getPlayersByNation, getAuthPlayer, nations, getNations, getPlayingPositions } = this.props;

    this.setState({ player });
  }

  handleCreateRelationship = () => {
    const { getPlayerConnection, createRelationship, deleteRelationship, id, authPlayer, player } = this.props;

    if (player && player.followers && player.followers.indexOf(authPlayer.user.id) === -1) {
      createRelationship(id)
        .then(() => {
          getPlayerConnection(id)
            .then(({ result }) => this.setState({ player: result.data }));
        });
    } else {
      deleteRelationship(id)
        .then(() => {
          getPlayerConnection(id)
            .then(({ result }) => this.setState({ player: result.data }));
        });
    }
  }

  render() {
    const { authPlayer } = this.props;
    const { player } = this.state;

    return (
      <View style={styles.playerCard}>
        <View style={styles.flexCenterRow}>
          <View style={styles.borderRadiusCircle}>
            <Thumbnail
              style={[styles.profileImage]}
              source={(player && player.user && player.user.profile_image) || images.user}
            />
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
              {player.playing_position && player.playing_position.abbreviated} for {player.main_team && player.main_team.team_name}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.handleCreateRelationship} style={[player && player.followers && player.followers.indexOf(authPlayer.user.id) === -1 ? styles.playerFollowButton : styles.playerFollowingButton]}>
          <Text style={player && player.followers && player.followers.indexOf(authPlayer.user.id) === -1 ? styles.playerFollowButtonText : styles.playerFollowingButtonText}>
            {player && player.followers && player.followers.indexOf(authPlayer.user.id) === -1 ? 'Follow' : 'Following'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  selectors,
  {
    ...actions.player,
    ...actions.relationship,
  },
)(ConnectionView);
