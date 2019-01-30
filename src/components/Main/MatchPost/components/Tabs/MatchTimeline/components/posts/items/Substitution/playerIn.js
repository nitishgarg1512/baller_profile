import React from 'react';
import { View, Image } from 'react-native';

import styles from '../../../../styles';

const playerIcon = require('../../../../../../../../../../static/images/player-1.png');
const arrowLeft = require('../../../../../../../../../../static/images/arrow-left.png');

const PlayerIn = () => {
    return (
        <View style={styles.substitutionPlayerView}>
        	<Image source={arrowLeft} style={styles.arrowLeft}/>
            <Image source={playerIcon} style={styles.playerImage} />
        </View>
    );
}

export default PlayerIn;
