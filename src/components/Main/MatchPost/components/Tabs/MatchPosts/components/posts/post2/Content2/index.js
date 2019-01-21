import React from 'react';
import { View, Image } from 'react-native';

import styles from '../../../../styles';
const postPicture = require('../../../../../../../../../../static/images/matchPosts/post-picture-2.jpg');
const circleBlue = require('../../../../../../../../../../static/images/matchPosts/circle-blue-icon.png');

const Content2 = () => {
    return (
        <View style={styles.content2View}>
            <View style={styles.content2ImageView}>
                <Image source={circleBlue} style={styles.circleBlue} />
                <Image source={postPicture} style={styles.postPicture} />
            </View>
        </View>
    );
}

export default Content2;