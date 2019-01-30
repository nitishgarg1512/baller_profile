import React, { Component } from 'react';
import { View } from 'react-native';

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
