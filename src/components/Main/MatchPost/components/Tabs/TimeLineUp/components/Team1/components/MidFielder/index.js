import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
const sportIcon = require('../../../../../../../../../../static/images/ball.png');

const MidFielder = () => {
    return (
        <View style={styles.midFielderView}>
            <View style={styles.positionTitle}>
            	<Text style={styles.positionTitleText}>MidFielders</Text>
        	</View>
        	<View>
        		<Text>CC A</Text>
        	</View>
        </View>
    );
}

export default MidFielder;
