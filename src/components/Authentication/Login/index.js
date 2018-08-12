import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
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
      showLogo: true,
      user: {
        email: '',
        password: '',
      },
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.hideLogo);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.showLogo);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  handleShowPassword = () => {
    const { showPassword } = this.state;

    this.setState({
      showPassword: !showPassword,
    });
  }

  changeUserValue = (value, key) => {
    const { user } = this.state;

    this.setState({
      user: {
        ...user,
        [key]: value,
      },
    });
  }

  hideLogo = () => {
    this.setState({
      showLogo: false,
    });
  }

  showLogo = () => {
    this.setState({
      showLogo: true,
    });
  }

  render() {
    const { showPassword, user, showLogo } = this.state;

    const logoContent = showLogo
      ? (
        <View style={styles.headerContainer}>
          <Image
            style={styles.logoWelcome}
            source={images.logo}
            resizeMode="contain"
          />
        </View>
      )
      : null;

    return (
      <ImageBackground
        source={images.authBg4}
        style={styles.backgroundImageSize}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <KeyboardAvoidingView style={styles.avoidingView} behavior="padding">
              {logoContent}
              <View style={styles.flexContainer}>
                <Item floatingLabel style={styles.itemEmail}>
                  <Label style={styles.inputLabel}>
                    Username or Email address
                  </Label>
                  <Input
                    selectionColor="#fff"
                    onChangeText={event => this.changeUserValue(event, 'email')}
                    value={user.email}
                    style={styles.input}
                  />
                </Item>
                <View />
                <Item floatingLabel style={styles.itemPassword}>
                  <Label style={styles.inputLabel}>
                    Type your password
                  </Label>
                  <Icon onPress={() => this.handleShowPassword()} style={styles.icon} type="FontAwesome" name={showPassword ? 'eye-slash' : 'eye'} />
                  <Input
                    selectionColor="#fff"
                    onChangeText={value => this.changeUserValue(value, 'password')}
                    value={user.password}
                    style={styles.input}
                    secureTextEntry={!showPassword}
                  />
                </Item>
                <View style={styles.forgotPasswordContainer}>
                  <Text style={styles.forgotPassword}>
                    Forgot your password?
                  </Text>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={user.email && user.password ? styles.reverseSubmitButton : styles.submitButton}>
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
            </KeyboardAvoidingView>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default Login;
