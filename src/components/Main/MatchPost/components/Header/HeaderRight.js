import React, { Component } from 'react';
import { Button, Text, StyleSheet } from 'react-native';
import { Container, Header } from 'native-base';

class HeaderRight extends Component {

    render() {
        return (
            <Button title={this.props.format_of_match} color="#fff" />
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: '#fff',
    }
});

export default HeaderRight;
