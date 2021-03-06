import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Icon, Content } from 'native-base';
import { Image, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { omit, merge } from 'lodash';

import selectors from './selectors';

import styles from '../common/styles';

import { UppercasedText, Form, Input, Select, Autocomplete } from '../../common/components';

import actions from '../../../actions';
import images from '../../../static/images';
import { paths, forms } from '../../../common/constants';

class Creation extends Form {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    const { getLeagues, getNations, getPostcodes, getPlayingPositions } = this.props;

    getPostcodes();
    // getLeagues();
    getNations();
    getPlayingPositions();
  }

  constructor() {
    super();

    this.state = {
      errors: {},
      validating: {},
      showNotify: false,
    };

    this.formId = forms.PROFILES_CREATION;
  }

  handleCreate = () => {
    this.handleSubmit()
      .then((canSubmit) => {
        if (canSubmit) {
          const { updateUser, updatePlayer, values, navigation, getPlayerByUsername, authUser, authPlayer, nationsOptions, playingPositionsOptions } = this.props;
          const { date } = this.state;

          const newValues = {
            ...values,
            second_nationality: values.second_nationality ? values.second_nationality : nationsOptions[0].value,
            playing_position: values.playing_position ? values.playing_position : playingPositionsOptions[0].value,
            nationality: values.nationality ? values.nationality : nationsOptions[0].value,
          };
          getPlayerByUsername(authUser.username)
            .then(({ result }) => {
              updateUser(omit(merge(newValues, {
                dob: date,
              }), ['gender']), result.data[0].user.id);
              updatePlayer(omit(merge(newValues, {
                dob: date,
              }), ['gender']), result.data[0].id)
                .then(() => {
                  if (navigation.getParam('redirect') && navigation.getParam('redirect') === 'join_team_message') {
                    this.setState({ showNotify: true });
                  } else {
                    navigation.navigate(paths.client.ProfilesView, { id: authPlayer.id });
                  }
                });
            });
        }

        return canSubmit;
      });
  }

  onClose = () => {
    const { navigation } = this.props;

    navigation.push(paths.client.WhatsNext);
  }

  handleSelectPostcode = (item) => {
    const { updateField } = this.props;

    updateField('region', item.region, this.formId);
  }

  render() {
    const { isSubmitting, navigation, gendersOptions, nationsOptions, playingPositionsOptions, postcodesOptions, authUser } = this.props;

    const createdView = (
      <Container>
        <Content>
          <View style={styles.displayFlexCenterColumn}>
            <Text style={styles.TeamsSelectionTitle}>
              Create your player profile
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
              <Text>Playing position</Text>
              <Select
                {...this.getFieldProps('playing_position')}
                itemStyle={styles.findTeamItem}
                labelStyle={styles.itemLabel}
                label="Playing position"
                options={playingPositionsOptions}
              />
            </View>
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <Text>Nationality (main)</Text>
              <Select
                {...this.getFieldProps('nationality')}
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
                {...this.getFieldProps('second_nationality')}
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
    )

    const selectedTeam = navigation.getParam('selecedTeam');
    const notifyView = (
      <Container>
        <Content>
          <View style={styles.modalContainer}>
            <View style={styles.displayFlexCenterRow}>
              <UppercasedText style={styles.TeamsSelectionTitle2}>
                You're almost there!
              </UppercasedText>
            </View>
            <View style={styles.TeamsSelectionModalCard}>
              <View style={styles.TeamsSelectionModalCardImage}>
                <Image
                  style={styles.teamCardImage}
                  source={selectedTeam && selectedTeam.team_badge ? { uri: selectedTeam.team_badge } : images.team}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.displayFlexCenterColumn}>
                <Text style={styles.TeamsSelectionModalDetailsText2}>
                  The {navigation.getParam('team_name') || ' '} team captain and team admins have been notified... They will add you to the squad as soon as posible
                </Text>
              </View>
            </View>
          </View>
        </Content>
        <View style={styles.footerModal}>
          <TouchableOpacity onPress={this.onClose} style={styles.footerButtonModal}>
            <UppercasedText style={styles.bottomMainButtonTextModal}>
              Done
            </UppercasedText>
          </TouchableOpacity>
        </View>
      </Container>
    )

    const { showNotify } = this.state;
    return (
      !showNotify ? createdView : notifyView
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
    ...actions.playingPositions,
    ...actions.user,
  },
)(Creation);
