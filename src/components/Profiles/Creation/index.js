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
        <Content>
          <View style={styles.displayFlexCenterColumn}>
            <Text style={styles.TeamsSelectionTitle}>
              Create your player profile
            </Text>
            <Text style={[styles.profileCreationSubtitle, styles.py10]}>
              Add your details to join the AFTV FC squad
            </Text>
          </View>
          <View style={styles.displayFlexCenterRow}>
            <UppercasedText style={[styles.profileCreationSubtitle, styles.py10]}>
              DIMITRIGBO
            </UppercasedText>
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
                Playing position
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
                Nationality (main)
              </Label>
              <Input
                disabled
                selectionColor="#fff"
              />
            </Item>
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Item floatingLabel style={styles.findTeamItem}>
              <Label style={styles.itemLabel}>
                Nationality (secondary)
              </Label>
              <Input
                disabled
                selectionColor="#fff"
              />
            </Item>
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Item floatingLabel style={styles.findTeamItem}>
              <Label style={styles.itemLabel}>
                Gender
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
                Postcode (1st half of postcode)
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
                Region
              </Label>
              <Input
                disabled
                selectionColor="#fff"
              />
            </Item>
          </View>
          <View style={[styles.py10, styles.wx50, styles.alignSelfCenter]}>
            <Text style={styles.itemLabel}>
              D.O.B
            </Text>
            <View style={styles.displayFlexCenterRowCreation}>
              <Item floatingLabel style={styles.findTeamDob}>
                <Label style={styles.itemLabel}>
                  Day
                </Label>
                <Icon type="FontAwesome" name="caret-down" />
                <Input
                  disabled
                  selectionColor="#fff"
                />
              </Item>
              <Item floatingLabel style={styles.findTeamDob}>
                <Label style={styles.itemLabel}>
                  Month
                </Label>
                <Icon type="FontAwesome" name="caret-down" />
                <Input
                  disabled
                  selectionColor="#fff"
                />
              </Item>
              <Item floatingLabel style={styles.findTeamDob}>
                <Label style={styles.itemLabel}>
                  Year
                </Label>
                <Icon type="FontAwesome" name="caret-down" />
                <Input
                  disabled
                  selectionColor="#fff"
                />
              </Item>
            </View>
          </View>
        </Content>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsNotified)} style={styles.footerButton}>
            <UppercasedText style={styles.bottomMainButtonText}>
              Done
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
