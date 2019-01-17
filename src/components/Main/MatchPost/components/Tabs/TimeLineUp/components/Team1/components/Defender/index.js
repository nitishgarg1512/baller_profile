import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
import Player from '../Player';

const sportIcon = require('../../../../../../../../../../static/images/ball.png');

const Defender = () => {
    return (
        <View style={styles.defenderView}>
            <View style={styles.positionTitle}>
            	<Text style={styles.positionTitleText}>Defenders</Text>
        	</View>
        	<View>
        		<Player />
                <Player />
        	</View>
        </View>
    );
}

export default Defender;
