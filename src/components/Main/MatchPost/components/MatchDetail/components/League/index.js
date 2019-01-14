import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../styles';

const League = () => {
    return (
        <View style={styles.row}>
            <Text style={styles.leagueText}>League Name</Text>
            <Text style={styles.leagueText}>Match Date</Text>
            <Text style={styles.leagueText}>2017/2018</Text>
        </View>
    );
}

export default League;
