import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../../styles';
import { Raw1, Raw2, Raw3, Raw4, Raw5, Raw6 } from '../Raws';

const Heat1 = () => {
    return (
        <View style={styles.heatMapContainer}>
            <View style={styles.heatMapTitle}>
                <Text style={styles.heatMapTitleText}>Team 1 Heat Map</Text>
            </View>
             <View style={styles.heatMapMain}>
                <View style={styles.heatMapCol1}>
                    <Text>Col 1</Text>
                </View>
                <View style={styles.heatMapCol2}>
                <Text>Col 2</Text>
                </View>
                <View style={styles.heatMapCol3}>
                <Text>Col 3</Text>
                </View>
            </View>
        </View>
    );
}

export default Heat1;