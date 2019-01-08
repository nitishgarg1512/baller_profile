import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../styles';

const GoalScoreIcon = () => {
    return (
    	<View>
	        <View style={styles.goalScoreIconView}>
	        	<View style={styles.goalScoreIconViewLeft}>
	        		<Text>Icon</Text>
	        	</View>
	        	<View style={styles.goalScoreIconViewCenter}>
	        		<Text>Icon</Text>
	        	</View>
	        	<View style={styles.goalScoreIconViewRight}>
	        		<Text>Icon</Text>
	        	</View>
	        </View>
        </View>
    );
}

export default GoalScoreIcon;
