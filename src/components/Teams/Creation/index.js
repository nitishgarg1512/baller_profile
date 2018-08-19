import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Input, Item, Label, Icon, Content } from 'native-base';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import { paths } from '../../../common/constants';

class Creation extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor() {
    super();

    this.state = {

    };
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const { navigation } = this.props;
    const { location, league, format, name } = this.state;

    const isComplete = location && league && format && name;

    return (
      <Container>
        <Content>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon style={styles.headerIcon} type="EvilIcons" name="close" />
            </TouchableOpacity>
          </View>
          <View style={styles.displayFlexCenterRow}>
            <UppercasedText style={styles.TeamsSelectionTitle}>
              CREATE YOUR TEAM!
            </UppercasedText>
          </View>
          <View style={styles.displayFlexCenterRow}>
            <Item floatingLabel style={styles.findTeamItem}>
              <Label style={styles.itemLabel}>
                Type your team&#39;s name here...
              </Label>
              <Input
                value={name}
                onChangeText={event => this.handleChange('name', event)}
              />
            </Item>
          </View>
          <View style={styles.profilePicContainer}>
            <View style={styles.profilePic}>
              <Icon type="Feather" name="plus" style={styles.profilePicIcon} />
              <Text style={styles.profilePicText}>
                Add a profile pic
              </Text>
            </View>
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Item floatingLabel style={styles.findTeamItem}>
              <Label style={styles.itemLabel}>
                What league do they play in?
              </Label>
              <Input
                value={league}
                onChangeText={event => this.handleChange('league', event)}
              />
            </Item>
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Item floatingLabel style={styles.findTeamItem}>
              <Label style={styles.itemLabel}>
                Select league location
              </Label>
              <Icon type="FontAwesome" name="caret-down" />
              <Input
                value={location}
                onChangeText={event => this.handleChange('location', event)}
              />
            </Item>
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Item floatingLabel style={styles.findTeamItem}>
              <Label style={styles.itemLabel}>
                What format is this league?
              </Label>
              <Icon type="FontAwesome" name="caret-down" />
              <Input
                value={format}
                onChangeText={event => this.handleChange('format', event)}
              />
            </Item>
          </View>
        </Content>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsConfirmation)} style={isComplete ? styles.footerButton : styles.footerButtonDisabled}>
            <UppercasedText style={styles.bottomMainButtonText}>
              Create team
            </UppercasedText>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

Creation.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Creation;
