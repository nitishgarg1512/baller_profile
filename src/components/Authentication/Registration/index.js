import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, Image, Text, View, TouchableOpacity } from 'react-native';
import { Icon, Item, Label, Input, Container, Content, Form } from 'native-base';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import images from '../../../static/images';
import { paths } from '../../../common/constants';

class Registration extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <View style={styles.displayFlexCenterRow}>
        <Text style={styles.headerMain}>
          Create your&nbsp;
          <Text style={styles.headerBaller}>
            Baller&nbsp;
          </Text>
          <Text style={styles.headerProfile}>
            Profile
          </Text>
        </Text>
      </View>
    ),
  }

  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      user: {
        email: '',
        password: '',
      },
    };
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

  render() {
    const { navigation } = this.props;
    const { showPassword, user } = this.state;

    return (
      <React.Fragment>
        <StatusBar />
        <Container>
          <Content>
            <Form>
              <Item style={styles.registrationItem} floatingLabel>
                <Label style={styles.inputLabelRegistration}>
                  Choose a username
                </Label>
                <Input value={user.username} onChangeText={value => this.changeUserValue(value, 'username')} />
              </Item>
              <Item style={styles.registrationItem} floatingLabel>
                <Label style={styles.inputLabelRegistration}>
                  Email address
                </Label>
                <Input value={user.email} onChangeText={value => this.changeUserValue(value, 'email')} />
              </Item>
              <Item style={styles.registrationItem} floatingLabel>
                <Label style={styles.inputLabelRegistration}>
                  Select password
                </Label>
                <Input secureTextEntry={!showPassword} value={user.password} onChangeText={value => this.changeUserValue(value, 'password')} />
                <Icon onPress={() => this.handleShowPassword()} style={styles.icon} type="FontAwesome" name={showPassword ? 'eye-slash' : 'eye'} />
              </Item>
              <Item style={styles.registrationItem} floatingLabel>
                <Label style={styles.inputLabelRegistration}>
                  Confirm your password
                </Label>
                <Input secureTextEntry={!showPassword} value={user.confirmPassword} onChangeText={value => this.changeUserValue(value, 'confirmPassword')} />
              </Item>
              <View style={styles.registrationFlexContainer}>
                <TouchableOpacity onPress={() => navigation.navigate(paths.client.WhatsNext)} style={styles.registrationReverseSubmitButton}>
                  <UppercasedText style={styles.registrationSubmitButtonText}>
                    Sign me up!
                  </UppercasedText>
                </TouchableOpacity>
              </View>
              <View style={styles.registrationOrContainer}>
                <UppercasedText style={styles.registrationOr}>
                  Or
                </UppercasedText>
              </View>
              <View style={styles.globalFlex}>
                <TouchableOpacity style={styles.instaButton}>
                  <View style={styles.displayFlexCenter}>
                    <Text style={styles.instaText}>
                      Continue with insta
                    </Text>
                  </View>
                  <Image
                    style={styles.logoInsta}
                    source={images.insta}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.globalFlex}>
                <TouchableOpacity style={styles.twitterButton}>
                  <View style={styles.displayFlexCenter}>
                    <Text style={styles.twitterText}>
                      Continue with Twitter
                    </Text>
                  </View>
                  <Image
                    style={styles.logoTwitter}
                    source={images.twitter}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View syle={styles.globalFlex}>
                <Text style={styles.tosMain}>
                  By creating a BallerProfile, you agree to our
                </Text>
                <View style={styles.tosChildren}>
                  <Text style={styles.tosTerms}>
                    Terms&nbsp;
                  </Text>
                  <Text>
                    &&nbsp;
                  </Text>
                  <Text style={styles.tosConditions}>
                    Conditions
                  </Text>
                </View>
              </View>
            </Form>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

Registration.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Registration;
