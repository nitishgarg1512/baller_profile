import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon, Item, Label, Input } from 'native-base';

import styles from '../common/styles';
import images from '../../../static/images';

class Login extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };
  }

  handleShowPassword = () => {
    const { showPassword } = this.state;

    this.setState({
      showPassword: !showPassword,
    });
  }

  render() {
    const { showPassword } = this.state;

    return (
      <ImageBackground
        source={images.authBg4}
        style={styles.backgroundImageSize}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <Image
                style={styles.logoWelcome}
                source={images.logo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.flexContainer}>
              <Item floatingLabel style={styles.marginTop20}>
                <Label style={styles.inputLabel}>
                  Username or Email address
                </Label>
                <Input style={styles.input} />
              </Item>
              <View />
              <Item floatingLabel style={styles.marginTop40}>
                <Label style={styles.inputLabel}>
                  Type your password
                </Label>
                <Icon onPress={() => this.handleShowPassword()} style={styles.icon} type="FontAwesome" name={showPassword ? 'eye-slash' : 'eye'} />
                <Input style={styles.input} secureTextEntry={!showPassword} />
              </Item>
              <View style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPassword}>
                  Forgot your password?
                </Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>
                  Log in
                </Text>
              </TouchableOpacity>
              <Text style={styles.subeading2Login}>
                Don&#39;t have a BallerProfile?&nbsp;
                <Text style={styles.loginLink}>
                  Sign me up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default Login;
