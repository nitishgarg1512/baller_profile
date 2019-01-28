import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../../../styles';
import Player from '../Player';

const Striker = () => {
    return (
        <View style={styles.midFielderView}>
            <View style={styles.positionTitle}>
            	<Text style={styles.positionTitleText}>Striker</Text>
        	</View>
        	<View>
        		<Player />
        	</View>
        </View>
    );
}

export default Striker;
