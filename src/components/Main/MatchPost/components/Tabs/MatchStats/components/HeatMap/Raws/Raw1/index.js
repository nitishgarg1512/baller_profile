import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from '../../../../styles';
import { Box1, Box2, Box3 } from '../../Boxes';

const Raw1 = () => {
    return (
        <View style={styles.heatMapRaws}>
            <Box1 />
            <Box2 />
            <Box3 />
        </View>
    );
}

export default Raw1;