import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import styles from './styles';

class Stats extends React.Component {
    static navigationOptions = {
        headerTitle: (
            <View style={styles.bookingView}>
                <View style={styles.navigationLeftText}>
                    <Text style={styles.navigationText}>
                        Dimitri Stats
                    </Text>
                </View>
                <View style={styles.bookingIcons}>
                    <View style={styles.bookingIconFrame}><Text style={styles.navigationRightText}>MID</Text></View>
                </View>
            </View>
        ),
        headerStyle: {
          backgroundColor: '#0071c0',
        },
        headerTintColor: 'white',
      }
    
      constructor() {
        super();
    
        this.state = {
          player: undefined,
        };
      }
    
      componentDidMount() {
        const { navigation } = this.props;
    
        this.setState({
          player: navigation.getParam('player'),
        });
      }
    

    render() {
        return (
            <View style={styles.overView}>
                <Text>123</Text>
            </View>
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