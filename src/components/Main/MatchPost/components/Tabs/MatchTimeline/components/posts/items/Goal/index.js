import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
import Player from '../Player';

const sportIcon = require('../../../../../../../../../../static/images/ball.png');

const Goal = () => {
    return (
        <View style={styles.goalView}>
            <View style={styles.goalIcons}>
                <View style={styles.bookingIconFrame}><Image source={sportIcon} style={styles.bookingImage}/></View>
                <View><Text style={styles.bookingIconTime}>02:31</Text></View>
            </View>
            <View style={styles.bookingContent}>
            	<Text style={styles.bookingContentTitle}>Goal!!!</Text>
                <Text style={styles.bookingContentDesciption}>
                    <Text style={styles.playerLinkText}>Player 4</Text> scores. Assist by
                    <Text style={styles.playerLinkText}> Player 3</Text>
                </Text>
                <Text style={styles.bookingContentDesciption}>Team 1: 1, Team 2: 0</Text>
        	</View>
        	<View style={styles.bookingPlayer}>
        		<Player />
        	</View>
        </View>
    );
}

export default Goal;
