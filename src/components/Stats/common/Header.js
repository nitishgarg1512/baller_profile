import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        const { header, headerTitle } = styles;
        const { navigation, title, position } = this.props;
        return (
            <Container>
                <Header style={header}>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name='arrow-back' style={headerTitle} />
                        </Button>
                    </Left>
                    <Body><Title style={headerTitle}>{title}</Title></Body>
                    <Right>
                        <Button transparent>
                            <Text style={headerTitle}>{position}</Text>
                        </Button>
                    </Right>
                </Header>
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
)(Header);
