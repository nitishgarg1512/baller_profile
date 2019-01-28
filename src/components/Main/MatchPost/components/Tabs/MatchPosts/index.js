import React, { Component } from 'react';
import { View } from 'react-native';

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
