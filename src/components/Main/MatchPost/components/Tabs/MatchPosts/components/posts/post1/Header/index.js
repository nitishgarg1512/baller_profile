import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'native-base';

import styles from '../../../../styles';
import Player from '../Player';

const trumpetIcon = require('../../../../../../../../../../static/images/coi.png');

const Header = () => {
    return (
        <View style={styles.postView}>
            <View style={styles.postPlayer}>
        		<Player />
        	</View>
            <View style={styles.postContent}>
            	<Text style={styles.postContentTitle}>Mena Ntueba</Text>
        	</View>
            <View style={styles.postIcons}>
                <Icon name='right'  style={styles.icoNavigate} />
            </View>
        </View>
    );
}

export default Header;

