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
    };
  }

  componentDidMount() {
    const { player } = this.props;

    this.setState({ player });
  }

  handleVisitProfile = () => {
    const { navigation } = this.props;
    const { player } = this.state;

    if (player.nationality) {
      navigation.push(paths.client.ProfilesView, { id: player.id });
    }
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

    const position = player.playing_position ? player.playing_position.playing_position : 'No position';
    const team = player.main_team ? `for ${player.main_team.team_name}` : '';

    const position_team = `${position} ${team}`;

    const following = player && player.followers && player.followers.find(p => p.user.id === authPlayer.user.id);

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
        <TouchableOpacity onPress={this.handleCreateRelationship} style={[!following ? styles.playerFollowButton : styles.playerFollowingButton]}>
          <Text style={!following ? styles.playerFollowButtonText : styles.playerFollowingButtonText}>
            {!following ? 'Follow' : 'Following'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ConnectionView.propTypes = {
  //navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.player,
    ...actions.relationship,
  },
)(ConnectionView);
