import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
import Player from '../Player';

const sportIcon = require('../../../../../../../../../../static/images/ball.png');

const MidFielder = () => {
    return (
        <View style={styles.midFielderView}>
            <View style={styles.positionTitle}>
            	<Text style={styles.positionTitleText}>MidFielders</Text>
        	</View>
        	<View>
        		<Player />
                <Player />
                <Player />
        	</View>
        </View>
    );
}

export default MidFielder;
