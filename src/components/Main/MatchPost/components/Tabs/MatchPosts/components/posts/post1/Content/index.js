import React from 'react';
import { View, Text, Image } from 'react-native';
import Video from 'react-native-video';

import styles from '../../../../styles';

const Content = () => {
    return (
        <View style={styles.contentView}>
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
        </View>
    );
}

export default Content;