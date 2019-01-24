import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from '../../styles';

import Man from './Man';
import Stats from './Stats';

const MatchMan = () => {
    return (
        <View>
        	<ScrollView contentContainerStyle={styles.contentContainer}>
                <View>
                    <Man />
                    <Stats />
                </View>
            </ScrollView>
        </View>
    );
}

export default MatchMan;
