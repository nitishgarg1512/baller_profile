import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>Notifications</Text>
        </View>
    );
}

export default Header;
