import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const diegoImg = require('../../../../../static/images/diego.jpg');

import styles from '../../../styles';

const Item1 = () => {
    const { itemView, avatar, infoView, username,
        infoText, signView, signButton, signButtonText,
        timerText } = styles;
    return (
        <View style={itemView}>
            <Image source={diegoImg} style={avatar} />
            <View style={infoView}>
                <Text style={username}>Diego Costa</Text>
                <Text style={infoText}>Wants to join Chelsea</Text>
            </View>
            <View style={signView}>
                <TouchableOpacity style={signButton}>
                    <Text style={signButtonText} >Sign Him?</Text>
                </TouchableOpacity>
                <Text style={timerText}>11/12/2018</Text>
            </View>
        </View>
    );
}

export default Item1;
