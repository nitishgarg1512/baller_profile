import React from 'react';
import { View } from 'react-native';

import { Item1, Item2, Item3, Item4, Item5, Item6 } from '../items';
import styles from '../../../styles';

const Team = () => {
    return (
        <View style={styles.teamContainer}>
            <Item1 />
            <Item2 />
            <Item3 />
            <Item4 />
            <Item5 />
            <Item6 />
        </View>
    );
}

export default Team;
