import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../../../styles';
import Player from '../Player';

const MidFielder = () => {
    return (
        <View style={styles.midFielderView}>
            <View style={styles.positionTitle}>
            	<Text style={styles.positionTitleText}>MidFielders</Text>
        	</View>
        	<View>
        		<Player />
                <Player />
                <Player />
        	</View>
        </View>
    );
}

export default MidFielder;
