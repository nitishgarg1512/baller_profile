import React from 'react';
import { View } from 'react-native';

import Individual from './Individual';
import IndividualStats from './IndividualStats';

const MatchIndividual = () => {
    return (
        <View>
            <Individual />
            <IndividualStats />
        </View>
    );
}

export default MatchIndividual;
