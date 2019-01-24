import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const diegoImg = require('../../../../../static/images/diego.jpg');

import styles from '../../../styles';

const Item2 = () => {
    const { itemView, avatar, infoView, username,
        infoText, signView, timerText } = styles;
    return (
        <View style={itemView}>
            <Image source={diegoImg} style={avatar} />
            <View style={infoView}>
                <Text style={username}>Diego Costa</Text>
                <Text style={infoText}>Was rejected</Text>
            </View>
            <View style={signView}>
                <Text style={timerText}>11/12/2018</Text>
            </View>
        </View>
    );
}

export default Item2;
