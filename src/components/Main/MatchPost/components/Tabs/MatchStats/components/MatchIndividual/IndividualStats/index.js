import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../../styles';

const IndividualStats = () => {
    return (
        <View style={styles.individualStatsView}>
            <View style={styles.individualStatsBpPoint}>
                <View style={styles.individualStatsBpPointTitle}>
                    <Text style={styles.individualStatsTitleText}>Total BP Points</Text>
                </View>
                <View style={styles.individualStatsBpPointNumber}>
                    <Text style={styles.individualStatsBpPointNumberText}>13</Text>
                </View>
            </View>
            <View style={styles.individualStatsPointList}>
                <View style={styles.individualStatsPointTitle}>
                    <Text style={styles.individualStatsPointTitleText}> </Text>
                </View>
                <View style={styles.individualStatsPointTotal}>
                    <Text style={styles.individualStatsPointTotalText}>Total</Text>
                </View>
                <View style={styles.individualStatsPointPoint}>
                    <Text style={styles.individualStatsPointPointText}>Point</Text>
                </View>
            </View>
            <View style={styles.individualStatsPointList}>
                <View style={styles.individualStatsPointTitle}>
                    <Text style={styles.individualStatsPointTitleText}>Goals</Text>
                </View>
                <View style={styles.individualStatsPointTotal}>
                    <Text style={styles.individualStatsPointTotalText}>1</Text>
                </View>
                <View style={styles.individualStatsPointPoint}>
                    <Text style={styles.individualStatsPointPointText}>4</Text>
                </View>
            </View>
            <View style={styles.individualStatsPointList}>
                <View style={styles.individualStatsPointTitle}>
                    <Text style={styles.individualStatsPointTitleText}>Assists</Text>
                </View>
                <View style={styles.individualStatsPointTotal}>
                    <Text style={styles.individualStatsPointTotalText}>2</Text>
                </View>
                <View style={styles.individualStatsPointPoint}>
                    <Text style={styles.individualStatsPointPointText}>4</Text>
                </View>
            </View>
            <View style={styles.individualStatsPointList}>
                <View style={styles.individualStatsPointTitle}>
                    <Text style={styles.individualStatsPointTitleText}>Fouls committed</Text>
                </View>
                <View style={styles.individualStatsPointTotal}>
                    <Text style={styles.individualStatsPointTotalText}>2</Text>
                </View>
                <View style={styles.individualStatsPointPoint}>
                    <Text style={styles.individualStatsPointPointText}>-1</Text>
                </View>
            </View>
            <View style={styles.individualStatsPointList}>
                <View style={styles.individualStatsPointTitle}>
                    <Text style={styles.individualStatsPointTitleText}>Yellow</Text>
                </View>
                <View style={styles.individualStatsPointTotal}>
                    <Text style={styles.individualStatsPointTotalText}>0</Text>
                </View>
                <View style={styles.individualStatsPointPoint}>
                    <Text style={styles.individualStatsPointPointText}>0</Text>
                </View>
            </View>
            <View style={styles.individualStatsPointList}>
                <View style={styles.individualStatsPointTitle}>
                    <Text style={styles.individualStatsPointTitleText}>Red</Text>
                </View>
                <View style={styles.individualStatsPointTotal}>
                    <Text style={styles.individualStatsPointTotalText}>0</Text>
                </View>
                <View style={styles.individualStatsPointPoint}>
                    <Text style={styles.individualStatsPointPointText}>0</Text>
                </View>
            </View>
            <View style={styles.individualStatsPointList}>
                <View style={styles.individualStatsPointTitle}>
                    <Text style={styles.individualStatsPointTitleText}>Minutes played</Text>
                </View>
                <View style={styles.individualStatsPointTotal}>
                    <Text style={styles.individualStatsPointTotalText}>32mins</Text>
                </View>
                <View style={styles.individualStatsPointPoint}>
                    <Text style={styles.individualStatsPointPointText}>6</Text>
                </View>
            </View>
            <View style={styles.individualStatsPointList}>
                <View style={styles.individualStatsPointTitle}>
                    <Text style={styles.individualStatsPointTitleText}>Penalties conceded</Text>
                </View>
                <View style={styles.individualStatsPointTotal}>
                    <Text style={styles.individualStatsPointTotalText}>0</Text>
                </View>
                <View style={styles.individualStatsPointPoint}>
                    <Text style={styles.individualStatsPointPointText}>0</Text>
                </View>
            </View>
            <View style={styles.individualStatsPointList}>
                <View style={styles.individualStatsPointTitle}>
                    <Text style={styles.individualStatsPointTitleText}>Free-kicks</Text>
                </View>
                <View style={styles.individualStatsPointTotal}>
                    <Text style={styles.individualStatsPointTotalText}> </Text>
                </View>
                <View style={styles.individualStatsPointPoint}>
                    <Text style={styles.individualStatsPointPointText}> </Text>
                </View>
            </View>
            <View style={styles.individualStatsPointList}>
                <View style={styles.individualStatsPointTitle}>
                    <Text style={styles.individualStatsPointTitleText}>Fouls drawn</Text>
                </View>
                <View style={styles.individualStatsPointTotal}>
                    <Text style={styles.individualStatsPointTotalText}> </Text>
                </View>
                <View style={styles.individualStatsPointPoint}>
                    <Text style={styles.individualStatsPointPointText}> </Text>
                </View>
            </View>
            <View style={styles.individualStatsPointList}>
                <View style={styles.individualStatsPointTitle}>
                    <Text style={styles.individualStatsPointTitleText}>Penalties taken</Text>
                </View>
                <View style={styles.individualStatsPointTotal}>
                    <Text style={styles.individualStatsPointTotalText}> </Text>
                </View>
                <View style={styles.individualStatsPointPoint}>
                    <Text style={styles.individualStatsPointPointText}> </Text>
                </View>
            </View>
        </View>
    );
}

export default IndividualStats;