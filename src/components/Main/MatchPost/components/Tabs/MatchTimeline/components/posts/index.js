import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from '../../styles';

import { 
    Booking,
    Foul,
    Goal
} from './items';

const Team1 = () => {
    return (
        <View>
        	<ScrollView contentContainerStyle={styles.contentContainer}>
	            <Booking />
                <Foul />
	            <Goal />
            </ScrollView>
        </View>
    );
}

export default Team1;
