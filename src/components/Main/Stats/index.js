import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import actions from '../../../actions';

class Stats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View />
    }
}

Stats.propTypes = {
    navigation: PropTypes.shape({}).isRequired,
};

export default connect(
    null,
    {
        ...actions.authentication,
    },
)(Stats);