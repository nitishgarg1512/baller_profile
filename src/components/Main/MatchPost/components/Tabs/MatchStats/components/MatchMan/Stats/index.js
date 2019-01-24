import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from '../../../styles';

const playButton = require('../../../../../../../../../static/images/matchPosts/play-icon.png');
const Team1Logo = require('../../../../../../../../../static/images/team1.png');
const Team2Logo = require('../../../../../../../../../static/images/team2.png');

const Stats = () => {
    return (
        <View style={styles.statsView}>
            <View style={styles.statsTeam}>
                <View style={styles.statsTeam1Logo}>
                    <Image source={Team1Logo} style={styles.statsTeam1Image} />
                </View>
                <View style={styles.statsTeamTitle}>
                    <Text style={styles.statsTeam1TitleText}>Match Stats</Text>
                </View>
                <View style={styles.statsTeam2Logo}>
                    <Image source={Team2Logo} style={styles.statsTeam2Image} />
                </View>
            </View>
            <View style={styles.statsBpPoint}>
                <View style={styles.statsTeam1BpPoint}>
                    <Text style={styles.statsBpPointNumber}>23</Text>
                </View>
                <View style={styles.statsBpPointTitle}>
                    <Text style={styles.statsBpPointTitleText}>Total BP Points</Text>
                </View>
                <View style={styles.statsTeam2BpPoint}>
                    <Text style={styles.statsBpPointNumber}>22</Text>
                </View>
            </View>
            <View style={styles.statsPointList}>
                <View style={styles.statsTeam1Point}>
                    <Text style={styles.statsPointNumber}>4</Text>
                </View>
                <View style={styles.statsPointTitle}>
                    <Text style={styles.statsPointTitleText}>Goals</Text>
                </View>
                <View style={styles.statsTeam2Point}>
                    <Text style={styles.statsPointNumber}>2</Text>
                </View>
            </View>

            <View style={styles.statsPointList}>
                <View style={styles.statsTeam1Point}>
                    <Text style={styles.statsPointNumber}>5</Text>
                </View>
                <View style={styles.statsPointTitle}>
                    <Text style={styles.statsPointTitleText}>Fouls</Text>
                </View>
                <View style={styles.statsTeam2Point}>
                    <Text style={styles.statsPointNumber}>1</Text>
                </View>
            </View>
            <View style={styles.statsPointList}>
                <View style={styles.statsTeam1Point}>
                    <Text style={styles.statsPointNumber}>1</Text>
                </View>
                <View style={styles.statsPointTitle}>
                    <Text style={styles.statsPointTitleText}>Yellow</Text>
                </View>
                <View style={styles.statsTeam2Point}>
                    <Text style={styles.statsPointNumber}>0</Text>
                </View>
            </View>
            <View style={styles.statsPointList}>
                <View style={styles.statsTeam1Point}>
                    <Text style={styles.statsPointNumber}>0</Text>
                </View>
                <View style={styles.statsPointTitle}>
                    <Text style={styles.statsPointTitleText}>Red</Text>
                </View>
                <View style={styles.statsTeam2Point}>
                    <Text style={styles.statsPointNumber}>0</Text>
                </View>
            </View>
            <View style={styles.statsPointList}>
                <View style={styles.statsTeam1Point}>
                    <Text style={styles.statsPointNumber}>1</Text>
                </View>
                <View style={styles.statsPointTitle}>
                    <Text style={styles.statsPointTitleText}>Number of Scorers</Text>
                </View>
                <View style={styles.statsTeam2Point}>
                    <Text style={styles.statsPointNumber}>1</Text>
                </View>
            </View>
            <View style={styles.statsPointList}>
                <View style={styles.statsTeam1Point}>
                    <Text style={styles.statsPointNumber}>1</Text>
                </View>
                <View style={styles.statsPointTitle}>
                    <Text style={styles.statsPointTitleText}>Number of Assistors</Text>
                </View>
                <View style={styles.statsTeam2Point}>
                    <Text style={styles.statsPointNumber}>1</Text>
                </View>
            </View>
            <View style={styles.statsPointList}>
                <View style={styles.statsTeam1Point}>
                    <Text style={styles.statsPointNumber}>8</Text>
                </View>
                <View style={styles.statsPointTitle}>
                    <Text style={styles.statsPointTitleText}>Number of players used</Text>
                </View>
                <View style={styles.statsTeam2Point}>
                    <Text style={styles.statsPointNumber}>8</Text>
                </View>
            </View>
        </View>
    );
}

export default Stats;