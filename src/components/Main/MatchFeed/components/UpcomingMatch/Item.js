import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../../styles';

const likeImg = require('../../../../../static/images/likes.png');
const leagueImg = require('../../../../../static/images/league.png');
const chelseaImg = require('../../../../../static/images/chelsea.png');

const Item = () => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.h3}>SATURDAY, AUGUST 12</Text>
            <View style={styles.group}>
                <View style={styles.leagueGroup}>
                    <View style={styles.leagueCol1}>
                        <Image style={styles.leagueImg} source={leagueImg} />
                        <Text style={styles.leagueName}>Premier League</Text>
                        <Text>></Text>
                    </View>
                    <View style={styles.leagueCol2}>
                        <TouchableOpacity>
                            <Ionicons name="ios-notifications-outline" size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.matchGroup}>
                    <View style={styles.match}>
                        <View style={styles.teamView}>
                            <Image style={styles.clubImage} source={chelseaImg} />
                            <Text style={styles.teamName}>Chelsea</Text>
                        </View>
                        <View style={styles.teamView}>
                            <Image style={styles.clubImage} source={chelseaImg} />
                            <Text style={styles.teamName}>Chelsea</Text>
                        </View>
                    </View>
                    <View style={styles.seperateVertical} />
                    <View style={styles.infoMatch}>
                        <TouchableOpacity style={styles.notificationsItem}>
                            <Ionicons name="ios-notifications-outline" size={30} />
                            <Text style={styles.pdLeft10}>34</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.likeItem}>
                            <Image source={likeImg} />
                            <Text style={styles.pdLeft10}>7</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Item;
