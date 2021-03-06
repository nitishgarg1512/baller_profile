import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../styles';

const likeIcon = require('../../../../../../../../../../static/images/matchPosts/like-icon.png');
const commentIcon = require('../../../../../../../../../../static/images/matchPosts/comment-icon.png');

const Footer2 = () => {
    return (
        <View style={styles.footerView}>
            <View style={styles.footerLike}>
                <Image source={likeIcon} style={styles.likeImage} />
                <Text style={styles.totalLike}>206</Text>
        	</View>
            <View style={styles.footerComments}>
                <Image source={commentIcon} style={styles.commentImage} />
                <Text style={styles.totalLike}>16</Text>
            </View>
        </View>
    );
}

export default Footer2;

