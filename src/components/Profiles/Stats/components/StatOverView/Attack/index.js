import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import styles from '../../../styles';

const Attack = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.groupView}>
            <View style={styles.groupHeader}>
                <Text style={styles.textHeader}>Attack</Text>
                <View>
                    <Text>BP Points</Text>
                    <Text>124</Text>
                </View>
            </View>
        </View>
    );
}

export default Attack;
