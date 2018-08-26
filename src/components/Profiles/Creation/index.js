import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Icon, Content } from 'native-base';

import selectors from './selectors';

import styles from '../common/styles';

import { UppercasedText, Form, Input } from '../../common/components';

import actions from '../../../actions';
import { paths, forms } from '../../../common/constants';

class Creation extends Form {
  static navigationOptions = {
    header: null,
  }

  constructor() {
    super();

    this.state = {
      errors: {},
      validating: {},
    };

    this.formId = forms.PROFILES_CREATION;
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const { navigation, values } = this.props;
    const { playing_position, gender, nationality_main, nationality_secondary, region, postcode, day, month, year } = values;

    const isComplete = playing_position && gender && nationality_main && nationality_secondary && region && postcode && day && month && year;

    return (
      <Container>
        <Content>
          <View style={styles.displayFlexCenterColumn}>
            <Text style={styles.TeamsSelectionTitle}>
              Create your player profile
            </Text>
            <Text style={[styles.profileCreationSubtitle, styles.py10]}>
              Add your details to join the
              {navigation.getParam('team_name')}
              squad
            </Text>
          </View>
          <View style={styles.displayFlexCenterRow}>
            <UppercasedText style={[styles.profileCreationSubtitle, styles.py10]}>
              {navigation.getParam('username')}
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
            <Input
              {...this.getFieldProps('playing_position')}
              itemStyle={styles.findTeamItem}
              labelStyle={styles.itemLabel}
              addon={<Icon type="FontAwesome" name="caret-down" />}
              label="Playing position"
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Input
              {...this.getFieldProps('nationality_main')}
              itemStyle={styles.findTeamItem}
              labelStyle={styles.itemLabel}
              label="Nationality (main)"
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Input
              {...this.getFieldProps('nationality_secondary')}
              itemStyle={styles.findTeamItem}
              labelStyle={styles.itemLabel}
              label="Nationality (secondary)"
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Input
              {...this.getFieldProps('gender')}
              itemStyle={styles.findTeamItem}
              labelStyle={styles.itemLabel}
              label="Gender"
              addon={<Icon type="FontAwesome" name="caret-down" />}
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Input
              {...this.getFieldProps('postcode')}
              itemStyle={styles.findTeamItem}
              labelStyle={styles.itemLabel}
              label="Postcode (1st half of postcode)"
              addon={<Icon type="FontAwesome" name="caret-down" />}
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Input
              {...this.getFieldProps('region')}
              itemStyle={styles.findTeamItem}
              labelStyle={styles.itemLabel}
              label="Region"
            />
          </View>
          <View style={[styles.py10, styles.wx50, styles.alignSelfCenter]}>
            <Text style={styles.itemLabel}>
              D.O.B
            </Text>
            <View style={styles.displayFlexCenterRowCreation}>
              <Input
                {...this.getFieldProps('day')}
                itemStyle={styles.findTeamDob}
                labelStyle={styles.itemLabel}
                label="Day"
                addon={<Icon type="FontAwesome" name="caret-down" />}
              />
              <Input
                {...this.getFieldProps('month')}
                itemStyle={styles.findTeamDob}
                labelStyle={styles.itemLabel}
                label="Month"
                addon={<Icon type="FontAwesome" name="caret-down" />}
              />
              <Input
                {...this.getFieldProps('year')}
                itemStyle={styles.findTeamDob}
                labelStyle={styles.itemLabel}
                label="Year"
                addon={<Icon type="FontAwesome" name="caret-down" />}
              />
            </View>
          </View>
        </Content>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsNotified)} style={isComplete ? styles.footerButton : styles.footerButtonDisabled}>
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

export default connect(
  selectors,
  {
    ...actions.forms,
  },
)(Creation);
