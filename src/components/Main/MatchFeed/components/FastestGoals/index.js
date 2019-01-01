import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

import Item from './Item';

const FastestGoals = () => {
    return (
        <View style={styles.fastestGoalsContainer}>
            <Text style={styles.h3}>Fastest goals of the week</Text>
            <View style={styles.fastestGroup}>
                <Item last={0} />
                <Item last={0} />
                <Item last={1} />
            </View>
        </View>
    );
}

export default FastestGoals;
