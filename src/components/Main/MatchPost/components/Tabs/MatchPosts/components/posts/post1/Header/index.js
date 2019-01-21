import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'native-base';

import styles from '../../../../styles';
import Player from '../Player';

const trumpetIcon = require('../../../../../../../../../../static/images/coi.png');

const Header = () => {
    return (
        <View style={styles.headerView}>
            <View style={styles.headerPlayer}>
        		<Player />
        	</View>
            <View style={styles.headerContent}>
            	<Text style={styles.headerContentTitle}>Mena Ntueba</Text>
        	</View>
            <View style={styles.headerIcons}>
                <Icon name='arrow-forward'  style={styles.icoNavigate} />
            </View>
        </View>
    );
}

export default Header;

