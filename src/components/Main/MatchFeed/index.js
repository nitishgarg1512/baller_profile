import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';

import { Header, UpcomingMatch, Result, FastestGoals } from './components';

import styles from './styles';
import selectors from './selectors';

import actions from '../../../actions';

class MatchFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    viewMore() {
        const { navigation } = this.props;
        navigation.push(paths.client.MatchPost);
    }

    render() {
        const { navigation, authPlayer } = this.props;
        return (
            <View style={styles.container}>
                <Header navigation={navigation} authPlayer={authPlayer} />
                <ScrollView>
                    <UpcomingMatch navigation={navigation} />
                    {/* <Result navigation={navigation} />
                    <FastestGoals /> */}
                </ScrollView>
            </View>
        )
    }
}

MatchFeed.propTypes = {
    navigation: PropTypes.shape({}).isRequired,
};

export default connect(
    selectors,
    {
        ...actions.authentication,
    },
)(MatchFeed);
