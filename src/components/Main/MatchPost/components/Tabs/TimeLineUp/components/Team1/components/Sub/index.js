import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../../../styles';
import Player from '../Player';

const Sub = () => {
    return (
        <View style={styles.subView}>
            <View style={styles.subTitle}>
            	<Text style={styles.subTitleText}>Subs</Text>
        	</View>
        	<View>
        		<Player />
        	</View>
        </View>
    );
}

export default Sub;
