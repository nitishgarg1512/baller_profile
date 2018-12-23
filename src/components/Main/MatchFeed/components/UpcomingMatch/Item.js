import React from 'react';
import { View, Text, Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../../styles';
const likeImg = require('../../../../../static/images/likes.png');

const Item = () => {
    return (
        <View>
            <Text style={styles.h3}>SATURDAY, AUGUST 12</Text>
            <View style={styles.group}>
                <View>
                    <Text style={styles.leagueName}>Premier League</Text>
                </View>
                <View style={styles.matchGroup}>
                    <View style={styles.match}>
                        <Text style={styles.teamName}>Chelsea</Text>
                        <Text style={styles.teamName}>Liverpool</Text>
                    </View>
                    <View style={styles.infoMatch}>
                        <View style={styles.notificationsItem}>
                            <Ionicons name="ios-notifications-outline" size={30} color="#900" />
                            <Text>34</Text>
                        </View>
                        <View style={styles.likeItem}>
                            <Image source={likeImg} />
                            <Text>7</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Item;
