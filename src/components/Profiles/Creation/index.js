import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Icon, Content } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { omit, merge } from 'lodash';

import selectors from './selectors';

import styles from '../common/styles';

import { UppercasedText, Form, Input, Select, Autocomplete } from '../../common/components';

import actions from '../../../actions';
import { paths, forms } from '../../../common/constants';

class Creation extends Form {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    const { getLeagues, getNations, getPostcodes } = this.props;

    getPostcodes();
    getLeagues();
    getNations();
  }

  constructor() {
    super();

    this.state = {
      errors: {},
      validating: {},
    };

    this.formId = forms.PROFILES_CREATION;
  }

  handleCreate = () => {
    this.handleSubmit()
      .then((canSubmit) => {
        if (canSubmit) {
          const { updatePlayer, values, navigation, getPlayerByUsername, authUser, authPlayer } = this.props;
          const { date } = this.state;

          getPlayerByUsername(authUser.username)
            .then(({ result }) => {
              updatePlayer(omit(merge(values, { dob: date }), ['gender']), result.data[0].id)
                .then(() => navigation.navigate(paths.client.ProfilesView, { id: authPlayer.id }));
            });
        }

        return canSubmit;
      });
  }

  handleSelectPostcode = (item) => {
    const { updateField } = this.props;

    updateField('region', item.region, this.formId);
  }

  render() {
    const { navigation, gendersOptions, nationsOptions, playingPositionsOptions, postcodesOptions, authUser } = this.props;

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
              {authUser.first_name || ''}
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
            <Select
              {...this.getFieldProps('playing_position')}
              itemStyle={styles.findTeamItem}
              labelStyle={styles.itemLabel}
              label="Playing position"
              options={playingPositionsOptions}
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Select
              {...this.getFieldProps('nationality')}
              itemStyle={styles.findTeamItem}
              labelStyle={styles.itemLabel}
              label="Nationality (main)"
              options={nationsOptions}
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Select
              {...this.getFieldProps('second_nationality')}
              itemStyle={styles.findTeamItem}
              labelStyle={styles.itemLabel}
              label="Nationality (secondary)"
              options={nationsOptions}
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Select
              {...this.getFieldProps('gender')}
              itemStyle={styles.findTeamItem}
              labelStyle={styles.itemLabel}
              label="Gender"
              options={gendersOptions}
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Autocomplete
              itemStyle={styles.findTeamItem}
              labelStyle={styles.itemLabel}
              label="Postcode"
              data={postcodesOptions}
              handleSelect={this.handleSelectPostcode}
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Input
              {...this.getFieldProps('region')}
              labelStyle={styles.itemLabelRegion}
              label="Region"
              disabled
              itemStyle={styles.findTeamItemRegion}
            />
          </View>
          <View style={[styles.py10, styles.wx50, styles.alignSelfCenter]}>
            <Text style={styles.itemLabel}>
              D.O.B
            </Text>
            <View style={styles.displayFlexCenterRowCreation}>
              <DatePicker
                style={{ alignSelf: 'center', width: '100%', borderTopColor: 'transparent', borderLeftColor: 'transparent' }}
                date={this.state.date}
                mode="date"
                placeholder="Select date of birth"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateInput: {
                    marginTop: 10,
                    marginBottom: 10,
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    alignItems: 'flex-start',
                  },
                  dateText: {
                    fontFamily: 'calibri-italic',
                    fontSize: 16,
                    color: 'rgba(0,0,0,.8)',
                  },
                  placeholderText: {
                    fontFamily: 'calibri-italic',
                    fontSize: 16,
                    color: 'rgba(0,0,0,.8)',
                  },
                }}
                onDateChange={(date) => { this.setState({ date }); }}
              />
            </View>
          </View>
        </Content>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.handleCreate} style={styles.footerButton}>
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
  getPostcodes: PropTypes.func.isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.forms,
    ...actions.nations,
    ...actions.leagues,
    ...actions.player,
    ...actions.postcodes,
  },
)(Creation);
