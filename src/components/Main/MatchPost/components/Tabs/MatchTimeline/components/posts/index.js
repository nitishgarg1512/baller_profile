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
        	<ScrollView contentContainerStyle={styles.contentContainer}>
	            <Booking />
                <Substitution />
                <Foul />
	            <Goal />
                <MatchStart />
            </ScrollView>
        </View>
    );
}

export default Team1;
