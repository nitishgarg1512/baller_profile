import React from 'react';
import { View, ScrollView } from 'react-native';
import Profile from './Profile';
import Defence from './Defence';
import Attack from './Attack';
import Discipline from './Discipline';
import GeneralStats from './GeneralStats';

import styles from '../../styles';

const StatOverView = () => {
    return (
        <ScrollView>
            <View style={styles.statOverView}>
                <Profile />
                <Defence />
                <Attack />
                <Discipline />
                <GeneralStats />
            </View>
        </ScrollView>
    );
}

export default StatOverView;
