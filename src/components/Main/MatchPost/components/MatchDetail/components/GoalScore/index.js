import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { GoalScoreLeft, GoalScoreIcon, GoalScoreRight } from './goalScore';


import styles from '../../styles';

const GoalScore = () => {
    return (
    	<View>
	        <View style={styles.row}>
		        <View style={styles.scoreView}>
		            <GoalScoreLeft/>
		            <GoalScoreIcon/>
		            <GoalScoreRight/>
	            </View>
	        </View>
     	</View>
    );
}

export default GoalScore;
