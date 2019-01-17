import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
import Player from '../Player';

const sportIcon = require('../../../../../../../../../../static/images/ball.png');

const GoalKeeper = () => {
    return (
        <View style={styles.goalKeeperView}>
        	<View style={styles.positionTitle}>
            	<Text style={styles.positionTitleText}>Goalkeeper</Text>
        	</View>
        	<View>
        		<Player />
        	</View>
        </View>
    );
}

export default GoalKeeper;
