import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Image, Text, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';
import { Container, Input, Item, Label } from 'native-base';

import selectors from './selectors';
import { TeamModal } from './components';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import actions from '../../../actions';
import images from '../../../static/images';
import { hashtag } from '../../../static/json';
import { paths } from '../../../common/constants';

class Selection extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor() {
    super();

    this.state = {
      showModal: false,
      selectedTeam: undefined,
    };
  }

  componentDidMount() {
    const { getTeams } = this.props;

    StatusBar.setHidden(false);

    getTeams();
  }

  toggleModal = (team) => {
    const { showModal } = this.state;

    this.setState({
      showModal: !showModal,
      selectedTeam: team,
    });
  }

  render() {
    const { navigation, teams, isLoading } = this.props;
    const { showModal, selectedTeam } = this.state;

    let content = <ActivityIndicator />;

    if (!isLoading && teams) {
      content = (
        <React.Fragment>
          <TeamModal navigation={navigation} visible={showModal} selectedTeam={selectedTeam} toggleModal={this.toggleModal} />
          <Container>
            <View>
              <View style={styles.displayFlexCenterRow}>
                <UppercasedText style={styles.TeamsSelectionTitle}>
                Find your team!
                </UppercasedText>
              </View>
              <View style={styles.displayFlexCenterRow}>
                <Item floatingLabel style={styles.findTeamItem}>
                  <Label style={styles.itemLabel}>
                  Type your team&#39;s name here...
                  </Label>
                  <Input />
                </Item>
              </View>
              <View style={styles.scrollerContainer}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  style={styles.teamScroller}
                >
                  {teams && teams.map(team => (
                    <TouchableOpacity key={team.id} onPress={() => this.toggleModal(hashtag)}>
                      <View style={styles.TeamsSelectionCard}>
                        <View style={styles.TeamsSelectionCardImage}>
                          <Image
                            style={styles.teamCardImage}
                            source={images.hashtag}
                            resizeMode="contain"
                          />
                        </View>
                        <View style={styles.displayFlexCenterColumn}>
                          <Text style={styles.TeamsSelectionCardDetailsText}>
                          19 ballers
                          </Text>
                          <Text style={styles.TeamsSelectionCardDetailsText}>
                            {team.team_name}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
            <View style={styles.bottomActions}>
              <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsCreation)} style={styles.bottomMainButton}>
                <UppercasedText style={styles.bottomMainButtonText}>
                I can&#39;t find my team!
                </UppercasedText>
              </TouchableOpacity>
              <Text style={styles.bottomSecondaryText}>
              I don&#39;t play anymore!
              </Text>
            </View>
          </Container>
        </React.Fragment>
      );
    }

    return content;
  }
}

Selection.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  getTeams: PropTypes.func.isRequired,
  teams: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.teams,
  },
)(Selection);
