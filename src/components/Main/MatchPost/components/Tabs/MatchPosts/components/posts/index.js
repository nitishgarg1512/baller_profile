import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from '../../styles';

import { Header, Content, Footer } from './post1';

const Posts = () => {
    return (
        <View>
        	<ScrollView contentContainerStyle={styles.contentContainer}>
                <View>
                    <Header />
                    <Content />
                    <Footer />
                </View>
            </ScrollView>
        </View>
    );
}

export default Posts;
