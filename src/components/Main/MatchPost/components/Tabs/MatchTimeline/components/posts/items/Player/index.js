import React from 'react';
import { View, Image } from 'react-native';

import styles from '../../../../styles';
const playerIcon = require('../../../../../../../../../../static/images/player-1.png');

const Player = () => {
    return (
        <View style={styles.playerView}>
            <Image source={playerIcon} style={styles.playerImage} />
        </View>
    );
}

export default Player;
