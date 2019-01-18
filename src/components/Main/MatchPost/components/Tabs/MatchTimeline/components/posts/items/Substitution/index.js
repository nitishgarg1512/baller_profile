import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';
import PlayerIn from './playerIn';
import PlayerOut from './playerOut';

const changePlayerIcon = require('../../../../../../../../../../static/images/change-player.png');

const Substitution = () => {
    return (
        <View style={styles.substitutionView}>
            <View style={styles.substitutionIcons}>
                <View style={styles.substitutionIconFrame}><Image source={changePlayerIcon} style={styles.changePlayerImage}/></View>
                <View><Text style={styles.substitutionIconTime}>10:16</Text></View>
            </View>
            <View style={styles.substitutionContent}>
            	<Text style={styles.substitutionContentTitle}>Substitution</Text>
                <Text style={styles.substitutionContentDesciption}>
                    <Text style={styles.playerLinkText}>Player 2</Text> if on for
                    <Text style={styles.playerLinkText}> Player 4</Text>
                </Text>
                <Text style={styles.substitutionContentDesciption}>(team 1)</Text>
        	</View>
        	<View style={styles.substitutionPlayer}>
                <PlayerOut />
        		<PlayerIn />
        	</View>
        </View>
    );
}

export default Substitution;
