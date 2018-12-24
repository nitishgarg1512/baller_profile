import React from 'react';
import { View, Image } from 'react-native';
import styles from '../../styles';

const logoImg = require('../../../../../static/images/logo.png');
const diegoImg = require('../../../../../static/images/diego.jpg');

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <Image style={styles.logoImg} source={logoImg} />
                <Image style={styles.soccerImg} source={diegoImg} />
            </View>
        </View>
    );
}

export default Header;
