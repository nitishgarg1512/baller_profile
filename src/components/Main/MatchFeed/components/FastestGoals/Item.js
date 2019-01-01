import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../../styles';

const diegoImg = require('../../../../../static/images/diego.jpg');

const Item = (last) => {
    return (
        <View style={[styles.fastestItem, { borderBottomWidth: last === 1 ? 0 : 0.8 }]}>
            <View style={styles.fastestItemUserInfo}>
                <Image source={diegoImg} style={styles.soccerImg2} />
                <View style={styles.fastestItemGroupText}>
                    <Text style={styles.fastestItemUserText}>Roysten Drenthe</Text>
                    <Text style={styles.fastestItemInfoText}>vs MoverNShakers</Text>
                </View>
            </View>
            <View style={styles.fastestItemTimer}>
                <Text style={styles.matchFormatView}>5v5</Text>
                <View style={styles.fastestItemTimerGroup}>
                    <Text style={styles.fastestItemTimeText}>00:17</Text>
                    <Text style={styles.fastestItemSecsText}>secs</Text>
                </View>
                <View style={styles.matchBottomView}>
                    <Text>4</Text>
                </View>
            </View>
        </View>
    );
}

export default Item;
