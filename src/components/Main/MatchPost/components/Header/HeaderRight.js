import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header } from 'native-base';

class HeaderRight extends Component {

    render() {
        const { textStyle } = styles;
        return (
            <Text style={textStyle}>{this.props.format_of_match}</Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: '#fff',
    }
});

export default HeaderRight;
