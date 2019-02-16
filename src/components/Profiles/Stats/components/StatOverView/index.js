import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

import Attack from './Attack';
import Defence from './Defence';
import styles from '../../styles';

const pedroImage = require('../../../../../static/images/pedro.png');
const chelseaImage = require('../../../../../static/images/chelsea.png');

class StatsOverview extends React.Component {
   
    render() {
        return (
            <View style={styles.overView}>
                <View>
                    <Image source={pedroImage} />
                    <Image source={chelseaImage} />
                </View>
                <View>
                    <Text>Appearance</Text>
                    <Text>22</Text>
                    <Text>
                        <TouchableOpacity onPress={() => navigation.push(paths.client.ProfilesStats)}>
                            <Icon style={[styles.colorBlack, styles.fontSize20, styles.ml10]} name="ios-arrow-dropright" type="Ionicons" />
                        </TouchableOpacity>
                    </Text>
                </View>
                <Defence />
                <Attack />
            </View>
        );
    }
}

export default connect(
    null,
    {},
)(StatsOverview);