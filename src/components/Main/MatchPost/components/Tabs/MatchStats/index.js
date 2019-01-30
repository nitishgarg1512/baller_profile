import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import { MatchMan, MatchIndividual, HeatMap } from './components';

class MatchStats extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MatchMan />
                <MatchIndividual />
                <HeatMap />
            </View>
        )
    }
}

export default MatchStats;
