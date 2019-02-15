import React from 'react';
import { View, ScrollView } from 'react-native';
import Profile from './Profile';
import Defence from './Defence';

import styles from '../../styles';

const StatOverView = () => {
    return (
        <ScrollView>
            <View style={styles.statOverView}>
                <Profile />
                <Defence />
            </View>
        </ScrollView>
    );
}

export default StatOverView;
