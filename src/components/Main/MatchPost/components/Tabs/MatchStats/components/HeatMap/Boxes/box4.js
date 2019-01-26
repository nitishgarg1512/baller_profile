import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../styles';
const heatBall = require('../../../../../../../../../static/images/heat-ball.png');

const Box4 = () => {
    return (
        <View style={styles.boxItem}>
            <View style={styles.boxCol1}>
            </View>
            <View style={styles.boxCol2}>
                <Image source={heatBall} style={styles.heatBallImage} />
                <Text style={styles.heatBallNumber}>1</Text>
            </View>
            <View style={styles.boxCol3}>
                <View style={styles.heatSmallBox}></View>
            </View>
        </View>
    );
}

export default Box4;