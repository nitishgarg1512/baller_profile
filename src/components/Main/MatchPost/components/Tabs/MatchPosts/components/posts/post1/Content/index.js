import React from 'react';
import { View, Image } from 'react-native';
import Video from 'react-native-video';

import styles from '../../../../styles';
const playButton = require('../../../../../../../../../../static/images/matchPosts/play-icon.png');

const Content = () => {
    return (
        <View style={styles.contentView}>
            <View style={styles.contentImageView}>
                <Video source={{uri: "http://techslides.com/demos/sample-videos/small.mp4"}}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}
                onBuffer={this.onBuffer}
                onError={this.videoError}   
                rate={1.0}
                volume={1.0}
                muted={false}
                resizeMode={"cover"}
                style={styles.backgroundVideo} />
                <Image source={playButton} style={styles.playButton} />
            </View>
        </View>
    );
}

export default Content;