import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Container, Header } from 'native-base';
import { GoalScore, League, Team } from './components';

import styles from './styles';

class MatchDetail extends Component {

    render() {
        return (
            <View style={styles.container}>
        		<League/>
        		<Team/>
        		<GoalScore/>
            </View>
        )
    }
}

export default MatchDetail;
