import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles';

const GoalScoreRight = () => {
    return (
         <View style={styles.goalScoreRightView}>
         	<View style={styles.goalScoreTextInline}>
	         	<Text style={styles.goalScoreText}>C. Zazz</Text>
	        	<Text style={styles.goalScoreText}>10, 15</Text>
         	</View>
        </View>
    );
}

export default GoalScoreRight;
