import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from '../../../common/styles';

import images from '../../../../../static/images';

class TeamCard extends React.Component {
  componentDidMount() {
    const { team, getTeamPlayers } = this.props;

    getTeamPlayers(team.id);
  }

  render() {
    const { team } = this.props;

    return (
      <TouchableOpacity key={team.id}>
        <View style={styles.TeamsSelectionCard}>
          <View style={styles.TeamsSelectionCardImage}>
            <Image
              style={styles.teamCardImage}
              source={images.hashtag}
              resizeMode="contain"
            />
          </View>
          <View style={styles.displayFlexCenterColumn}>
            <Text style={styles.TeamsSelectionCardDetailsText}>
              ballers
            </Text>
            <Text style={styles.TeamsSelectionCardDetailsText}>
              {team.team_name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
