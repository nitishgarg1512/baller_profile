import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

import Item from './Item';
import ViewMore from './viewMore';

const Result = () => {
    return (
        <View style={styles.resultContainer}>
            <Text style={styles.h3}>Results</Text>
            <Item />
            <ViewMore />
        </View>
    );
}

export default Result;
