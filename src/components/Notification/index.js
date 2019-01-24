import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import actions from '../../actions';

import styles from './styles';
import { Header, TabsView } from './components';

class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Header navigation={navigation} />
                <TabsView />
            </View>
        )
    }
}

Notification.propTypes = {
    navigation: PropTypes.shape({}).isRequired,
};

export default connect(
    null,
    {
        ...actions.authentication,
    },
)(Notification);