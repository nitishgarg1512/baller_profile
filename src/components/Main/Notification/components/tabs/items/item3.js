import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const diegoImg = require('../../../../../../static/images/diego.jpg');

import styles from '../../../styles';

const Item3 = () => {
    const { itemView, avatar, infoView, username,
        infoText, signView, playButton, playButtonText } = styles;
    return (
        <View style={itemView}>
            <Image source={diegoImg} style={avatar} />
            <View style={infoView}>
                <Text style={username}>Man vs Liv</Text>
                <Text style={infoText}>You have been selected to play this match</Text>
            </View>
            <View style={signView}>
                <TouchableOpacity style={playButton}>
                    <Text style={playButtonText} >Play?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Item3;
