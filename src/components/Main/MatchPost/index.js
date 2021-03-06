import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { connect } from 'react-redux';

import { TabMain, MatchDetail } from './components';

class MatchPost extends Component {
    render() {
        const { header, headerTitle } = styles;
        const { navigation } = this.props;
        return (
            <Container>
                <Header style={header}>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name='arrow-back' style={headerTitle} />
                        </Button>
                    </Left>
                    <Body><Title style={headerTitle}>T1 vs T2</Title></Body>
                    <Right>
                        <Button transparent>
                            <Text style={headerTitle}>7v7</Text>
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    <MatchDetail />
                    <TabMain />
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
    },
    headerTitle: {
        color: '#fff',
    },
});

export default connect(
    null,
    {},
)(MatchPost);
