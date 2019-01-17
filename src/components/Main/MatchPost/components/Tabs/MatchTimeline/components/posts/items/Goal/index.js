import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
import Player from '../Player';

const sportIcon = require('../../../../../../../../../../static/images/ball.png');

const Goal = () => {
    return (
        <View style={styles.bookingView}>
            <View style={styles.bookingIcons}>
                <View style={styles.bookingIconFrame}><Image source={bookingIcon} style={styles.bookingImage}/></View>
                <View><Text style={styles.bookingIconTime}>27:48</Text></View>
            </View>
            <View style={styles.bookingContent}>
            	<Text style={styles.bookingContentTitle}>Booking</Text>
                <Text style={styles.bookingContentDesciption}>Yellow card for <Text style={styles.playerLinkText}>Player 5</Text> (team 2)</Text>
        	</View>
        	<View style={styles.bookingPlayer}>
        		<Player />
        	</View>
        </View>
    );
}

export default Goal;
