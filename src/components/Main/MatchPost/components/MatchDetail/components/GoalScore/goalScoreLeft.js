import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../styles';

const GoalScoreLeft = () => {
    return (
    	<View style={styles.goalScoreLeftView}>
	        <View>
	        	<Text>C. Rivas</Text>
	        	<Text>30, 44</Text>
	        </View>
	        <View>
	        	<Text>N. Garg</Text>
	        	<Text>39, 42</Text>
	        </View>
        </View>
    );
}

export default GoalScoreLeft;
