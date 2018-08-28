import PropTypes from 'prop-types';
import React from 'react';
import { Input as NativeInput, Icon, Label, Item, Picker } from 'native-base';

class Select extends React.Component {
  constructor() {
    super();

    this.state = {
      showPassword: false,
    };
  }

  toggleShowPassword = () => {
    const { showPassword } = this.state;

    this.setState({
      showPassword: !showPassword,
    });
  }

  render() {
    const { options, itemStyle, labelStyle, addon, style, disabled, error, id, isLoading, isSubmitting, isValidating, label, type, value, onChange } = this.props;
    const { showPassword } = this.state;

    return (
      <Item picker style={error ? { ...itemStyle, borderBottomColor: 'red' } : itemStyle} error={!!error}>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="ios-arrow-down-outline" />}
          style={{ width: undefined }}
          placeholder={label}
          placeholderStyle={{ color: '#bfc6ea' }}
          placeholderIconColor="#007aff"
          selectedValue={value}
          onValueChange={text => onChange(text, id)}
        >
          {options.map(option => (<Picker.Item key={option.value} label={option.label} value={option.value} />))}
        </Picker>
      </Item>
    );
  }
}

Select.defaultProps = {
  itemStyle: undefined,
  labelStyle: undefined,
  style: undefined,
  addon: undefined,
  disabled: false,
  error: undefined,
  isLoading: false,
  isSubmitting: false,
  isValidating: false,
  value: '',
};

Select.propTypes = {
  itemStyle: PropTypes.shape({}),
  labelStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
  addon: PropTypes.element,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  isValidating: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Select;
