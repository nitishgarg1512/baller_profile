import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import { MatchMan, TeamStats } from './components';

class MatchStats extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <MatchMan />
                </ScrollView>
            </View>
        )
    }
}

export default MatchStats;
