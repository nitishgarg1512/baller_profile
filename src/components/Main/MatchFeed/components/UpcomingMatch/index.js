import React from 'react';
import { View } from 'react-native';
import styles from '../../styles';

import Item from './Item';

const UpcomingMatch = () => {
    const items = [1, 2];

    return (
        <View style={styles.upcomingContainer}>
            {
                items.forEach((key) => {
                    <Item />
                })
            }
        </View>
    );
}

export default UpcomingMatch;
