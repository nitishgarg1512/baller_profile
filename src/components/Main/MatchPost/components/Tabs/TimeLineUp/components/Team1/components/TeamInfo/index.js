import React from 'react';
import { View, Text, Image } from 'react-native';

const team1 = require('../../../../../../../../../../static/images/team1.png');

import styles from '../../../../styles';

const TeamInfo = () => {
    return (
        <View style={styles.teamInfoView}>
            <Image source={team1} style={styles.teamInfoIcon} />
			<Text style={styles.teamInfoText}>Team 1</Text>
			<Text style={styles.teamInfoLineUpText}> Starting Line-Up</Text>
        </View>
    );
}

export default TeamInfo;
