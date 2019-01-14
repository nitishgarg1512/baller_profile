import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from '../../styles';

import { TeamInfo, Defender, GoalKeeper, MidFielder } from './components';

const Team1 = () => {
    return (
        <View>
        	<ScrollView contentContainerStyle={styles.contentContainer}>
	            <TeamInfo />
	            <GoalKeeper />
	            <Defender />
	            <MidFielder />
            </ScrollView>
        </View>
    );
}

export default Team1;
