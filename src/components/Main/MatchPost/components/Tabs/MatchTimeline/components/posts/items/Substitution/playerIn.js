import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
const playerIcon = require('../../../../../../../../../../static/images/player-1.png');

const PlayerIn = () => {
    return (
        <View style={styles.substitutionPlayerView}>
            <Image source={playerIcon} style={styles.playerImage} />
        </View>
    );
}

export default PlayerIn;
