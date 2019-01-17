import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
import Player from '../Player';

const sportIcon = require('../../../../../../../../../../static/images/ball.png');

const Sub = () => {
    return (
        <View style={styles.subView}>
            <View style={styles.subTitle}>
            	<Text style={styles.subTitleText}>Subs</Text>
        	</View>
        	<View>
        		<Player />
        	</View>
        </View>
    );
}

export default Sub;
