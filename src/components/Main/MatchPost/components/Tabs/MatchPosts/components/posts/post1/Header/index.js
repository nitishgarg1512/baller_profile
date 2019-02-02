import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

import styles from '../../../../styles';
import Player from '../Player';

const Header = () => {
    return (
        <View style={styles.headerView}>
            <View style={styles.headerPlayer}>
        		<Player />
        	</View>
            <View style={styles.headerContent}>
            	<Text style={styles.headerContentTitle}>Dimitri Gbo</Text>
        	</View>
            <View style={styles.headerIcons}>
                <Icon name='arrow-forward'  style={styles.icoNavigate} />
            </View>
        </View>
    );
}

export default Header;

