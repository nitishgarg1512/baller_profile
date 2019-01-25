import React from 'react';
import { View } from 'react-native';

import styles from '../../styles';
import Heat1 from './Heat1';
import Heat2 from './Heat2';

const HeatMap = () => {
    return (
        <View style={styles.heatMapView}>
            <View style={styles.heatMapItem}>
                <Heat1 />
            </View>
            <View style={styles.heatMapItem}>
                <Heat2 />
            </View>
        </View>
    );
}

export default HeatMap;