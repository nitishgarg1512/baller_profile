import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../styles';

class Header extends Component {
    
    render() {
        const { navigation, title, position } = this.props;
        return (
            <View style={styles.bookingView}>
                <View style={styles.navigationLeftText}>
                    <Text style={styles.navigationText}>
                        { title }
                    </Text>
                </View>
                <View style={styles.bookingIcons}>
                    <View style={styles.bookingIconFrame}><Text style={styles.navigationRightText}>{position}</Text></View>
                </View>
            </View>
        )
    }
}

export default connect(
    null,
    {},
)(Header);
