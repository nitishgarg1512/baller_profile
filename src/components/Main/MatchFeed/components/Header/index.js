import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles';

const logoImg = require('../../../../../static/images/logo.png');
const diegoImg = require('../../../../../static/images/diego.jpg');

import { paths } from '../../../../../common/constants';

const Header = (props) => {
    const { navigation, authPlayer } = props;
    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <Image style={styles.logoImg} source={logoImg} />
                <TouchableOpacity onPress={() => navigation.push(paths.client.ProfilesView, { id: authPlayer.id })}>
                    <Image style={styles.soccerImg} source={diegoImg} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;
