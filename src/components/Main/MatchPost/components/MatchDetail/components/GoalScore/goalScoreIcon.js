import React from 'react';
import { View, Image } from 'react-native';

import styles from '../../styles';
const sportIcon = require('../../../../../../../static/images/ball.png');

const GoalScoreIcon = () => {
    return (
    	<View>
	        <View style={styles.goalScoreIconView}>
	        	<View style={styles.goalScoreIconViewLeft}>
	        		<Image source={sportIcon} style={styles.sportIcon} />
	        	</View>
	        </View>
        </View>
    );
}

export default GoalScoreIcon;
