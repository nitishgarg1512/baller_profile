import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../styles';

const Team1Logo = require('../../../../../../../static/images/team1.png');
const Team2Logo = require('../../../../../../../static/images/team2.png');

const Team = () => {
    return (
        <View style={styles.row}>
	        <View style={styles.teamView}>
	            <View style={styles.teamBadgeLogoView}>
			    	<View style={styles.team1BadgeLogoView}>
				    	<Image source={Team1Logo} style={styles.teamLogo} />
				    	<Text>Team 1</Text>
				    </View>
				    <View style={styles.teamBadgeLogoScore}>
				    	<Text style={styles.teamBadgeLogoScoreText}>4</Text>
				    	<Text> - </Text>
				    	<Text style={styles.teamBadgeLogoScoreText}>2</Text>
				    </View>
				    <View style={styles.team2BadgeLogoView}>
				    	<Image source={Team2Logo} style={styles.teamLogo} />
				    	<Text>Team 2</Text>
				    </View>
			    </View>
	            <View style={styles.teamOfficiateView}>
			    	<Text style={styles.teamOfficiateText}>Officiated by: Referee name</Text>
			    </View>
            </View>
        </View>
    );
}

export default Team;
