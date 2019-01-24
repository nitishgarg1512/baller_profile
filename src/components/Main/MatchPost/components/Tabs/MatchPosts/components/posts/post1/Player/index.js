import React from 'react';
import { View, Image } from 'react-native';

import styles from '../../../../styles';
const playerIcon = require('../../../../../../../../../../static/images/player-post-2.jpg');

const Player = () => {
    return (
        <View style={styles.playerView}>
            <Image source={playerIcon} style={styles.playerImage} />
        </View>
    );
}

export default Player;
