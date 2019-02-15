import React from 'react';
import { View } from 'react-native';
import Profile from './Profile';

import styles from '../../styles';

const StatOverView = () => {
    return (
    	<View style={styles.statOverView}>
            <Profile/>
        </View>
    );
}

export default StatOverView;
