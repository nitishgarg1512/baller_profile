import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import styles from './styles';

class Stats extends React.Component {
    static navigationOptions = {
        headerTitle: (
          <Text style={styles.navigationText}>
            Dimitri Stats
          </Text>
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
            <View>
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