import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from '../../styles';

import { 
    Booking,
    Foul,
    Goal,
    MatchStart,
    Substitution
} from './items';

const Team1 = () => {
    return (
        <View>
            <Booking />
            <Substitution />
            <Foul />
            <Goal />
            <MatchStart />
        </View>
    );
}

export default Team1;
