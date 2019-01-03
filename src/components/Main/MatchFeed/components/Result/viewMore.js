import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles';

import { paths } from '../../../../../common/constants';

const longArrow = require('../../../../../static/images/arrow-long-right.png');

const ViewMore = (props) => {
    const { navigation } = props;
    return (
        <TouchableOpacity onPress={() => navigation.push(paths.client.MatchPost)} style={styles.viewMoreDetailContainer} >
            <Image source={longArrow} style={styles.viewMoreImage} />
            <Text style={styles.viewMoreText}>View more results</Text>
        </TouchableOpacity >
    );
}

export default ViewMore;
