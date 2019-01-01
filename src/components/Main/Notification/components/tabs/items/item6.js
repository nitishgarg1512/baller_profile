import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const chelseaImg = require('../../../../../../static/images/chelsea.png');
import styles from '../../../styles';

const Item6 = () => {
    const { itemView, avatar, infoView, username,
        infoText, signView, numberText,
        timerText } = styles;
    return (
        <View style={itemView}>
            <Image source={chelseaImg} style={avatar} />
            <View style={infoView}>
                <Text style={username}>Match Request: Liverpool</Text>
                <Text style={infoText}>Match Accepted</Text>
            </View>
            <View style={signView}>
                <Text style={numberText}>75</Text>
                <Text style={timerText}>11/12/2018</Text>
            </View>
        </View>
    );
}

export default Item6;
