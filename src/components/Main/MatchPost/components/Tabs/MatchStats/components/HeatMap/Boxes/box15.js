import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../styles';
const trumpetIcon = require('../../../../../../../../../static/images/coi.png');

const Box15 = () => {
    return (
        <View style={styles.boxItem}>
            <View style={styles.boxRightGoal2}>
            </View>
            <View style={styles.boxLastCol2Trumpet}>
                <Image source={trumpetIcon} style={styles.trumpetIcon} />
                <Text style={styles.heatTrumpetNumber}>1</Text>
            </View>
        </View>
    );
}

export default Box15;