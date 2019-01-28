import React from 'react';
import { View } from 'react-native';

import { Header, Content, Footer } from './post1';
import { Header2, Content2, Footer2 } from './post2';

const Posts = () => {
    return (
        <View>
            <View>
                <Header />
                <Content />
                <Footer />
            </View>
            <View>
                <Header2 />
                <Content2 />
                <Footer2 />
            </View>
        </View>
    );
}

export default Posts;
