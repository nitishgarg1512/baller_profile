import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Container, Icon, Content } from 'native-base';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import selectors from './selectors';
import validations from './validations';

import styles from '../common/styles';

import { UppercasedText, Form, Input, Select } from '../../common/components';

import actions from '../../../actions';
import { paths, forms } from '../../../common/constants';

class Creation extends Form {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    const { getLeagues, getNations } = this.props;

    getLeagues();
    getNations();
  }

  constructor() {
    super();

    this.state = {
      validating: {},
      errors: {},
      avatarSource: undefined,
    };

    this.validations = validations;
    this.formId = forms.TEAMS_CREATION;
  }

  handleSetImage = () => {
    ImagePicker.showImagePicker((response) => {
      const source = { uri: `data:image/png;base64,${response.data}` };

      this.setState({
        avatarSource: source,
      });
    });
  }

  handleCreate = () => {
    this.handleSubmit()
      .then((canSubmit) => {
        if (canSubmit) {
          const { getAuthUser, createTeam, values, navigation, formatsOptions, nationsOptions, leaguesOptions } = this.props;
          const { avatarSource } = this.state;

          getAuthUser()
            .then(({ result }) => {
              const newValues = {
                ...values,
                location: values.location ? values.location : nationsOptions[0].value,
                format: values.format ? values.format : formatsOptions[0].value,
                league: values.league ? values.league : leaguesOptions[0].value,
                captain: result.data.pk,
                vice_captain: result.data.pk,
                team_badge: avatarSource,
                date_create: moment(new Date()).format('YYYY-MM-DD'),
              };

              createTeam(newValues)
                .then((data) => {
                  navigation.navigate(paths.client.TeamsConfirmation, { id: data.result.data.id });
                });
            });
        }

        return canSubmit;
      });
  }

  render() {
    const { navigation, values, leaguesOptions, nationsOptions, formatsOptions } = this.props;
    const { avatarSource } = this.state;
    const { abbreviated_name, nickname, team_name } = values;

    const isComplete = team_name && abbreviated_name && nickname;

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
            <Input
              {...this.getFieldProps('team_name')}
              labelStyle={styles.itemLabel}
              itemStyle={styles.findTeamItem}
              label="Enter your team's name"
            />
          </View>
          <TouchableOpacity onPress={this.handleSetImage}>
            {avatarSource
              ? (
                <View style={styles.profilePicContainer}>
                  <Image
                    style={styles.pic}
                    source={avatarSource}
                    resizeMode="contain"
                  />
                </View>
              )
              : (
                <View style={styles.profilePicContainer}>
                  <View style={styles.profilePic}>
                    <Icon type="Feather" name="plus" style={styles.profilePicIcon} />
                    <Text style={styles.profilePicText}>
                      Add a profile pic
                    </Text>
                  </View>
                </View>
              )
          }
          </TouchableOpacity>
          <View style={styles.displayFlexCenterRowCreation}>
            <Input
              {...this.getFieldProps('abbreviated_name')}
              labelStyle={styles.itemLabel}
              label="Team abbreviated name"
              itemStyle={styles.findTeamItem}
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Input
              {...this.getFieldProps('nickname')}
              labelStyle={styles.itemLabel}
              label="Team nickname"
              itemStyle={styles.findTeamItem}
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Select
              {...this.getFieldProps('league')}
              labelStyle={styles.itemLabel}
              label="What league do they play in?"
              itemStyle={styles.findTeamItem}
              options={leaguesOptions}
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Select
              {...this.getFieldProps('location')}
              labelStyle={styles.itemLabel}
              label="Select league location"
              itemStyle={styles.findTeamItem}
              options={nationsOptions}
            />
          </View>
          <View style={styles.displayFlexCenterRowCreation}>
            <Select
              {...this.getFieldProps('format')}
              labelStyle={styles.itemLabel}
              label="What format is this league?"
              itemStyle={styles.findTeamItem}
              options={formatsOptions}
            />
          </View>
        </Content>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => this.handleCreate()} style={isComplete ? styles.footerButton : styles.footerButtonDisabled}>
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

export default connect(
  selectors,
  {
    ...actions.forms,
    ...actions.team,
    ...actions.user,
    ...actions.leagues,
    ...actions.nations,
  },
)(Creation);
