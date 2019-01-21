import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

import Item from './Item';

const UpcomingMatch = (props) => {
    const items = [1, 2];

    return (
        <View style={styles.upcomingContainer}>
            <Text style={styles.h3}>SATURDAY, AUGUST 12</Text>
            <Item navigation={props.navigation} />
            <Item navigation={props.navigation} />
            <Text style={styles.h3}>SATURDAY, AUGUST 13</Text>
            <Item navigation={props.navigation} />
            <Item navigation={props.navigation} />
        </View>
    );
}

export default UpcomingMatch;
