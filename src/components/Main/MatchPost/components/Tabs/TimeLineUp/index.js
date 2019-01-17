import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { Team1 } from './components';

class TimeLineUp extends Component {
    render() {
        return (
            <View style={styles.container}>
            	<Team1 />
            </View>
        );
    }
}

export default TimeLineUp;
