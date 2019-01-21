import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from '../../styles';

import { Header, Content, Footer } from './post1';
import { Header2, Content2, Footer2 } from './post2';

const Posts = () => {
    return (
        <View>
        	<ScrollView contentContainerStyle={styles.contentContainer}>
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
            </ScrollView>
        </View>
    );
}

export default Posts;
