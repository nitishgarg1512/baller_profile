import React from 'react';
import { View, Image } from 'react-native';

import styles from '../../../../styles';
const postPicture = require('../../../../../../../../../../static/images/matchPosts/post-picture-2.jpg');

const Content2 = () => {
    return (
        <View style={styles.content2View}>
            <Image source={postPicture} style={styles.postPicture} />
        </View>
    );
}

export default Content2;