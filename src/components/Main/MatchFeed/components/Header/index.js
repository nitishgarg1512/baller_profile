import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <Text>Hi </Text>
            </View>
        </View>
    );
}

export default Header;
