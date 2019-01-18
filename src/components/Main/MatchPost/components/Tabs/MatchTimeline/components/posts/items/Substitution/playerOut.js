import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
const playerIcon = require('../../../../../../../../../../static/images/player-1.png');
const arrowRight = require('../../../../../../../../../../static/images/arrow-right.png');

const PlayerOut = () => {
    return (
        <View style={styles.substitutionPlayerView}>
        	<Image source={arrowRight} style={styles.arrowRight}/>
            <Image source={playerIcon} style={styles.playerImage} />
        </View>
    );
}

export default PlayerOut;
