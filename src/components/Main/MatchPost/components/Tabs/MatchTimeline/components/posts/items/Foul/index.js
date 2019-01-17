import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
import Player from '../Player';

const trumpetIcon = require('../../../../../../../../../../static/images/coi.png');

const Foul = () => {
    return (
        <View style={styles.foulView}>
            <View style={styles.foulIcons}>
                <View style={styles.foulIconFrame}><Image source={trumpetIcon} style={styles.trumpetImage}/></View>
                <View><Text style={styles.foulIconTime}>04:08</Text></View>
            </View>
            <View style={styles.foulContent}>
            	<Text style={styles.foulContentTitle}>Foul!!!</Text>
                <Text style={styles.foulContentDesciption}>
                    Foul by
                    <Text style={styles.playerLinkText}> Player 5 </Text>
                    (team 2)
                </Text>
        	</View>
        	<View style={styles.bookingPlayer}>
        		<Player />
        	</View>
        </View>
    );
}

export default Foul;
