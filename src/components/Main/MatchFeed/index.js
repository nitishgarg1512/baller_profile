import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import actions from '../../../actions';

class MatchFeed extends React.Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        return <View style={{backgroundColor: 'green', flex: 1}} />
    }
}

MatchFeed.propTypes = {
    navigation: PropTypes.shape({}).isRequired,
};

export default connect(
    null,
    {
        ...actions.authentication,
    },
)(MatchFeed);