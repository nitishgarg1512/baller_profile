import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from '../../../styles';
const playerIcon = require('../../../../../../../../../static/images/player-1.png');
const Team2Logo = require('../../../../../../../../../static/images/team2.png');

const Individual = () => {
    return (
        <View style={styles.individualView}>
            <View style={styles.manTitle}>
                <Text style={styles.manTitleText}>Individual Match Stats</Text>
            </View>
            <View style={styles.manContent}>
                <View style={styles.playerView}>
                    <Image source={playerIcon} style={styles.playerImage} />
                </View>
                <View style={styles.manNameView}>
                    <Text style={styles.manNameText}>Dimitri Gbo</Text>
                    <Text style={styles.manPlayerPosition}>Centre Midfielder</Text>
                </View>
                <View style={styles.team2BadgeLogoView}>
                    <Image source={Team2Logo} style={styles.teamLogo} />
                </View>
            </View>
        </View>
    );
}

export default Individual;