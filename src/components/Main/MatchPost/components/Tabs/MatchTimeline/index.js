import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Posts } from './components';

class MatchTimeline extends Component {
    render() {
        return (
            <View style={styles.container}>
            	<Posts />
            </View>
        )
    }
}

export default MatchTimeline;
