import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import actions from '../../../actions';

import styles from './styles';
import { Header, TabsView } from './components';

class MainNotification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View />
    }
}

MainNotification.propTypes = {
    navigation: PropTypes.shape({}).isRequired,
};

export default connect(
    null,
    {
        ...actions.authentication,
    },
)(MainNotification);