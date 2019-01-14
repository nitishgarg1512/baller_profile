import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';

const sportIcon = require('../../../../../../../../../../static/images/ball.png');

const Defender = () => {
    return (
        <View style={styles.defenderView}>
            <View style={styles.positionTitle}>
            	<Text style={styles.positionTitleText}>Defenders</Text>
        	</View>
        	<View>
        		<Text>CC A</Text>
        	</View>
        </View>
    );
}

export default Defender;
