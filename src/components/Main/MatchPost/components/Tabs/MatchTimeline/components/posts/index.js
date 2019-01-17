import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from '../../styles';

import { 
    Booking
} from './items';

const Team1 = () => {
    return (
        <View>
        	<ScrollView contentContainerStyle={styles.contentContainer}>
	            <Booking />
            </ScrollView>
        </View>
    );
}

export default Team1;
