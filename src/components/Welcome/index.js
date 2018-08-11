import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import { StepOne, StepTwo, StepThree, StepFour } from './components';
import styles from './common/styles';

import actions from '../../actions';

class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
    };
  }

  handleChangeIndex = (index) => {
    this.setState({
      activeStep: index,
    });
  }

  handleSkipSwiper = () => {
    this.setState({
      activeStep: 3,
    });
  }

  render() {
    const { navigation } = this.props;
    const { activeStep } = this.state;

    if (activeStep < 3) {
      return (
        <React.Fragment>
          <Swiper
            index={activeStep}
            onIndexChanged={index => this.handleChangeIndex(index)}
            loop={false}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            showButtons
          >
            <StepOne />
            <StepTwo />
            <StepThree />
          </Swiper>
          <TouchableOpacity onPress={this.handleSkipSwiper} style={styles.footerChildContainer}>
            <Text style={styles.skipButton}>
              Skip
            </Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    }

    return (
      <StepFour navigation={navigation} />
    );
  }
}

Welcome.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  null,
  {
    ...actions.authentication,
  },
)(Welcome);
