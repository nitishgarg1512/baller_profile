import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import actions from '../../actions';

const Home = ({ register }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={() => register({})}>
      <Text>
        Home Screen
      </Text>
    </TouchableOpacity>
  </View>
);

Home.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    ...actions.authentication,
  },
)(Home);
