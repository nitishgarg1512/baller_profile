import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles';

const longArrow = require('../../../../../static/images/arrow-long-right.png');


const ViewMore = () => {
    return (
        <View style={styles.viewMoreDetailContainer}>
            <Image source={longArrow} style={styles.viewMoreImage} />
            <Text style={styles.viewMoreText}>View more results</Text>
        </View>
    );
}

export default ViewMore;
