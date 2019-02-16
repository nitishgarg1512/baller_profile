import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import Header from './components/common/Header';
import StatsOverview from './components/StatOverView';
import styles from './styles';

class Stats extends React.Component {
    static navigationOptions = {
        headerTitle: (
            <Header title="Dimitri Stats" position="MID" />
        ),
        headerStyle: {
          backgroundColor: '#0071c0',
        },
        headerTintColor: 'white',
      }

      render() {
        return (
            <StatsOverview />
        );
    }
}

Stats.propTypes = {
    navigation: PropTypes.shape({}).isRequired,
};

export default connect(
    null,
    {},
)(Stats);