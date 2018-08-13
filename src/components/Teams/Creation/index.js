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

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon style={styles.headerIcon} type="EvilIcons" name="close" />
          </TouchableOpacity>
        </View>
        <View style={styles.displayFlexCenterRow}>
          <UppercasedText style={styles.teamSelectionTitle}>
              CREATE YOUR TEAM!
          </UppercasedText>
        </View>
        <Content>
          <View style={styles.displayFlexCenterRow}>
            <Item floatingLabel style={styles.findTeamItem}>
              <Label style={styles.itemLabel}>
                Type your team&#39;s name here...
              </Label>
              <Input />
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
              <Input />
            </Item>
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Item floatingLabel style={styles.findTeamItem}>
              <Label style={styles.itemLabel}>
                Select league location
              </Label>
              <Icon type="FontAwesome" name="caret-down" />
              <Input
                disabled
                selectionColor="#fff"
                value=""
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
                disabled
                selectionColor="#fff"
                value=""
              />
            </Item>
          </View>
        </Content>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamConfirmation)} style={styles.footerButton}>
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
