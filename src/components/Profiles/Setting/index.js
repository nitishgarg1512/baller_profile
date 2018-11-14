import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Icon, Content } from 'native-base';
import { View, Text, TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { omit, merge } from 'lodash';

import selectors from './selectors';

import styles from '../common/styles';

import styles2 from './styles';

import { UppercasedText, Form, Input, Select, Autocomplete } from '../../common/components';

import actions from '../../../actions';
import { paths, forms } from '../../../common/constants';

class Setting extends Form {
  static navigationOptions = {
    headerTitle: (
      <Text style={styles2.navigationText}>
        Settings
      </Text>
    ),
    headerStyle: {
      backgroundColor: '#0071c0',
    },
    headerTintColor: 'white',
  }

  componentDidMount() {
    const { getNations, getPostcodes, getPlayingPositions, navigation } = this.props;

    getPostcodes();
    getNations();
    getPlayingPositions();

    const id = navigation.getParam('id');

    this.setState({ id }, this.handleGetPlayer);
  }

  componentWillUnmount() {
    const { navigation } = this.props;
    const refreshProfile = navigation.getParam('refreshProfile');
    refreshProfile();
  }

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      validating: {},
      id: 0,
      player: {},
      date: null,
    };

    this.formId = forms.PROFILES_EDIT;
  }

  handleGetPlayer = () => {
    const { getPlayer } = this.props;

    const { id } = this.state;

    getPlayer(id)
      .then(({ result }) => {
        this.setState({
          player: result.data,
          date: result.data.user && result.data.user.dob,
        });
      }).catch((error) => {
        console.log('[Error] CallAPI: getPlayer');
        alert(error);
      });
  }

  handleCreate = () => {
    this.handleSubmit()
      .then((canSubmit) => {
        if (canSubmit) {
          const {
            updateUser, updatePlayer, values, navigation,
            authPlayer, nationsOptions, playingPositionsOptions, updateMainTeam } = this.props;
          const { date, player } = this.state;

          const nationality = player && player.nationality ? player.nationality.id : nationsOptions[0].value;
          const second_nationality = player && player.second_nationality ? player.second_nationality.id : nationsOptions[0].value;
          const playing_position = player && player.playing_position ? player.playing_position.id : playingPositionsOptions[0].value;

          const newValues = {
            ...values,
            second_nationality: values.second_nationality ? values.second_nationality : second_nationality,
            playing_position: values.playing_position ? values.playing_position : playing_position,
            nationality: values.nationality ? values.nationality : nationality,
            gender: values.gender ? values.gender : 'male',
          };

          if (newValues.main_team) {
            updateMainTeam(authPlayer.id, {
              team_id: newValues.main_team,
            });
          }
          updatePlayer(omit(merge(newValues, {
            dob: date,
          }), ['gender']), authPlayer.id);

          updateUser(omit(merge(newValues, {
            dob: date,
          }), ['gender']), authPlayer.user.id)
            .then(() => navigation.goBack());
        }

        return canSubmit;
      });
  }

  handleSelectPostcode = (item) => {
    const { updateField } = this.props;

    updateField('region', item.region, this.formId);
  }

  logout = () => {
    const { navigation } = this.props;

    AsyncStorage.clear()
      .then(() => navigation.navigate(paths.client.Login));
  }

  render() {
    const { isSubmitting, navigation, gendersOptions, nationsOptions, playingPositionsOptions, postcodesOptions, authUser } = this.props;

    const { player } = this.state;

    return (
      <Container>
        <Content>
          <View style={styles.displayFlexCenterColumn}>
            <Text style={styles.TeamsSelectionTitle}>
              Edit Profile
            </Text>
            <Text style={[styles.profileCreationSubtitle, styles.py10]}>
              Add your details to join the
              {navigation.getParam('team_name') || ' '}
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
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <TouchableOpacity onPress={() => this.logout()}>
                <Text>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <Text>Playing position</Text>
              <Select
                {...this.getFieldProps('playing_position', {
                  defaultValue: player && player.playing_position && player.playing_position.id,
                })}
                itemStyle={styles.findTeamItem}
                labelStyle={styles.itemLabel}
                label="Playing position"
                options={playingPositionsOptions}
              />
            </View>
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <Text>Main team</Text>
              <Select
                {...this.getFieldProps('main_team', {
                  defaultValue: player && player.main_team && player.main_team.id,
                })}
                itemStyle={styles.findTeamItem}
                labelStyle={styles.itemLabel}
                label="Main Team"
                options={player && player.teams ? player.teams.map(team => ({ label: team.team_name, value: team.id })) : []}
              />
            </View>
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <Text>Nationality (main)</Text>
              <Select
                {...this.getFieldProps('nationality', {
                  defaultValue: player && player.nationality && player.nationality.id,
                })}
                itemStyle={styles.findTeamItem}
                labelStyle={styles.itemLabel}
                label="Nationality (main)"
                options={nationsOptions}
              />
            </View>
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <Text>Nationality (secondary)</Text>
              <Select
                {...this.getFieldProps('second_nationality', {
                  defaultValue: player && player.second_nationality && player.second_nationality.id,
                })}
                itemStyle={styles.findTeamItem}
                labelStyle={styles.itemLabel}
                label="Nationality (secondary)"
                options={nationsOptions}
              />
            </View>
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
              {...this.getFieldProps('region', {
                defaultValue: player && player.user && player.user.postcode && player.user.postcode.id,
              })}
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
            {isSubmitting
              ? <ActivityIndicator size="small" color="white" />
              : (
                <UppercasedText style={styles.bottomMainButtonText}>
                  Done
                </UppercasedText>
              )
            }
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

Setting.propTypes = {
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
    ...actions.playingPositions,
    ...actions.user,
    ...actions.team,
  },
)(Setting);
