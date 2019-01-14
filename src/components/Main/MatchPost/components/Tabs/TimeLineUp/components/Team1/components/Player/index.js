import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
const playerIcon = require('../../../../../../../../../../static/images/player-1.png');

const Player = () => {
    return (
        <View style={styles.playerView}>
            <Image source={playerIcon} style={styles.playerImage} />
        	<Text style={styles.playerNameText}>Goalkeeper Name</Text>
            <Text style={styles.playerNumberText}>1</Text>
        </View>
    );
}

export default Player;
