import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Container, Header } from 'native-base';

import { Posts } from './components';
import styles from './styles';

class MatchPosts extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Posts />
            </View>
        )
    }
}

export default MatchPosts;
