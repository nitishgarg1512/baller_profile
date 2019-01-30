import React from 'react';
import { View } from 'react-native';

import styles from '../../styles';

import { 
    TeamInfo,
    Defender,
    GoalKeeper,
    MidFielder,
    Striker,
    Sub
} from './components';

const Team1 = () => {
    return (
        <View>
            <TeamInfo />
            <GoalKeeper />
            <Defender />
            <MidFielder />
            <Striker />
            <Sub />
        </View>
    );
}

export default Team1;
