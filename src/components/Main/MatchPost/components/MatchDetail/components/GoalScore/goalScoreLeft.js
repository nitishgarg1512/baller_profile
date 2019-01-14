import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../styles';

const GoalScoreLeft = () => {
    return (
    	<View style={styles.goalScoreLeftView}>
	        <View style={styles.goalScoreTextInline}>
	        	<Text style={styles.goalScoreText}>C. Rivas</Text>
	        	<Text style={styles.goalScoreText}>30, 44</Text>
	        </View>
	        <View style={styles.goalScoreTextInline}>
	        	<Text style={styles.goalScoreText}>N. Garg</Text>
	        	<Text style={styles.goalScoreText}>39, 42</Text>
	        </View>
        </View>
    );
}

export default GoalScoreLeft;
