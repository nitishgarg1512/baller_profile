import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

const UppercasedText = ({ style, children }) => (
  <Text style={style}>
    {children.toUpperCase()}
  </Text>
);

UppercasedText.defaultProps = {
  style: undefined,
};

UppercasedText.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.string.isRequired,
};

export default UppercasedText;
