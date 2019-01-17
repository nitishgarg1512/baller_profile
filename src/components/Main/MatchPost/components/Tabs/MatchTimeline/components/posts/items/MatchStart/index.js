import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
import Player from '../Player';

const MatchStart = () => {
    return (
        <View style={styles.matchStartView}>
            <View style={styles.goalIcons}>
                <View style={styles.bookingIconFrame}></View>
            </View>
            <View style={styles.bookingContent}>
            	<Text style={styles.bookingContentTitle}>Match Start</Text>
                <Text style={styles.matchStartContentDesciption}>First half begins</Text>
        	</View>
        	<View style={styles.matchStartTime}>
        		<View style={styles.matchStartTimeText}>
                    <Text style={styles.bookingContentDesciption}>10:00am</Text>
                </View>
        	</View>
        </View>
    );
}

export default MatchStart;
