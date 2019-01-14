import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
const sportIcon = require('../../../../../../../../../../static/images/ball.png');

const GoalKeeper = () => {
    return (
        <View style={styles.goalKeeperView}>
        	<View style={styles.positionTitle}>
            	<Text style={styles.positionTitleText}>GoalKeeper</Text>
        	</View>
        	<View>
        		<Text>CC A</Text>
        	</View>
        </View>
    );
}

export default GoalKeeper;
