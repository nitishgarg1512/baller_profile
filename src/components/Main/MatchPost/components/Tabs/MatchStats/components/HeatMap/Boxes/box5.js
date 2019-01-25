import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../styles';
const heatBall = require('../../../../../../../../../static/images/heat-ball.png');

const Box5 = () => {
    return (
        <View style={styles.boxItem}>
            <View style={styles.boxCol1}>
            </View>
            <View style={styles.boxCol2}>
                <Image source={heatBall} style={styles.heatBallImage} />
                <Text style={styles.heatBallNumber}>2</Text>
            </View>
            <View style={styles.boxCol3}>
            </View>
        </View>
    );
}

export default Box5;