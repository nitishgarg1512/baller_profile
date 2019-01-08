import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../styles';

const Team = () => {
    return (
        <View style={styles.row}>
	        <View style={styles.teamView}>
	            <Text>Diego Costa</Text>
	            <Text>Wants to join Chelsea</Text>
            </View>
        </View>
    );
}

export default Team;
