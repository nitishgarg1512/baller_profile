import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../../styles';
const chelseaImg = require('../../../../../static/images/chelsea.png');

const Item5 = (props) => {
    const { itemView, avatar, infoView, username,
        infoText, signView, playButton, playButtonText,
        timerText } = styles;
    const { onOpenMatchRequest } = props;
    return (
        <View style={itemView}>
            <Image source={chelseaImg} style={avatar} />
            <View style={infoView}>
                <Text style={username}>Match Request: Barcelona FC</Text>
                <Text style={infoText}>Do you accept the match?</Text>
            </View>
            <View style={signView}>
                <TouchableOpacity style={playButton} onPress={onOpenMatchRequest}>
                    <Text style={playButtonText} >Accept?</Text>
                </TouchableOpacity>
                <Text style={timerText}>11/12/2018</Text>
            </View>
        </View>
    );
}

export default Item5;
