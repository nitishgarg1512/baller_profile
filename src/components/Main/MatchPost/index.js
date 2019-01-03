import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { Container, Header } from 'native-base';

import { TabMain, MatchDetail } from './components';

import HeaderRight from './components/Header/HeaderRight';

class MatchPost extends Component {
    static navigationOptions = {
        title: 'T1 vs T2',
        headerRight: (
            <HeaderRight format_of_match="7v7" />
        ),
        headerStyle: {
            backgroundColor: '#000000',
            color: '#ffffff',
        },
        headerTintColor: '#fff',
    }

    render() {
        return (
            <Container>
                <MatchDetail />
                <TabMain />
            </Container>
        )
    }
}

export default MatchPost;
