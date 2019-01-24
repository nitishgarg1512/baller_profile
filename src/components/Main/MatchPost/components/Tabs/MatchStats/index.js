import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { MatchMan } from './components';

class MatchStats extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MatchMan />
            </View>
        )
    }
}

export default MatchStats;
