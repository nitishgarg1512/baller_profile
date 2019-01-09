import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles';

import { TeamInfo, Defender, GoalKeeper, MidFielder } from './components';

const Team1 = () => {
    return (
        <View>
            <TeamInfo />
            <Defender />
            <GoalKeeper />
            <MidFielder />
        </View>
    );
}

export default Team1;
