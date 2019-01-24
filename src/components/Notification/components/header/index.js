import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import styles from '../../styles';

const Header = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.headerWrapper}>
            <TouchableOpacity style={styles.w20} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" type="Feather" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Notifications</Text>
        </View>
    );
}

export default Header;
