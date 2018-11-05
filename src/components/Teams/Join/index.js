import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import { connect } from 'react-redux';

import selectors from './selectors';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import actions from '../../../actions';
import images from '../../../static/images';
import { paths } from '../../../common/constants';

class Join extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={styles.displayFlexCenterRowCreation}>
        <Text style={styles.headerMain}>
          {`${navigation.getParam('team').team_name.toUpperCase()}`}
          {' '}
          SQUAD
        </Text>
      </View>
    ),
  })

  constructor(props) {
    super(props);

    this.state = {
      team: props.navigation.getParam('team'),
      players: [],
    };
  }

  componentDidMount() {
    const { getPlayer, navigation, getTeamPlayers } = this.props;

    getTeamPlayers(navigation.getParam('team').id)
      .then(({ result }) => {
        this.setState({
          players: result.data,
        });
      });
  }

  handleJoin = () => {
    const { createRequest, authUser } = this.props;
    const { team } = this.state;

    const requestData = {
      to_team: team.id,
      from_user: authUser.pk,
      status: 'Waiting',
    };

    createRequest(requestData);
  }

  logout = () => {
    const { navigation } = this.props;

    AsyncStorage.clear()
      .then(() => navigation.navigate(paths.client.Login));
  }

  handleCreateRelationship = (id) => {
    const { getTeamPlayers, navigation, createRelationship } = this.props;

    createRelationship(id)
      .then(() => {
        getTeamPlayers(navigation.getParam('team').id)
          .then(({ result }) => {
            this.setState({
              players: result.data,
            });
          });
      })
      .catch(error => alert(error));
  }

  render() {
    const { navigation, createRelationship, authUser, authPlayer } = this.props;
    const { players, team } = this.state;


    return (
      <Container>
        <Content>
          <TouchableOpacity onPress={() => this.handleCreateRelationship(players && players[0] && players[0].id)}>
            <View style={[{ backgroundColor: '#0071c0' }, styles.displayFlexCenterRowCreation, styles.py20]}>
              <UppercasedText style={styles.followAllText}>
                Click to follow all players
              </UppercasedText>
            </View>
          </TouchableOpacity>
          <View style={[{ borderTopWidth: 0.6, borderColor: 'rgba(0,0,0,.3)', borderBottomWidth: 0.6 }, styles.displayFlexCenterRowCreation, styles.py20]}>
            <UppercasedText style={styles.TeamsJoinMainText}>
              2&nbsp;
            </UppercasedText>
            <UppercasedText style={styles.TeamsJoinSecondaryText}>
              Strikers
            </UppercasedText>
          </View>
          <View style={[{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
            {players && players.map((player) => {
              const following = player.followers && player.followers.find(p => p.user.id === authPlayer.user.id);
              return (
                <TouchableOpacity key={player.id} style={{ paddingTop: 15, paddingBottom: 15, flex: 1, borderRightWidth: 0.6, borderRightColor: 'rgba(0,0,0,.3)' }} onPress={() => navigation.navigate(paths.client.ProfilesView, { id: player.id })}>
                  <View style={styles.displayFlexCenterColumn}>
                    <View style={styles.TeamsJoinCardImage}>
                      <Thumbnail style={styles.joinTeamCardImage} source={player.user.profile_pic ? { uri: player.user.profile_pic } : images.user} />
                    </View>
                    <Text style={[styles.playerNameText, styles.py10]}>
                      {player.user.first_name}
                      {' '}
                      {player.user.last_name}
                      {navigation.getParam('team').captain === player.id ? '©' : null}
                    </Text>
                    <Text style={[styles.playerNameSecondaryText, styles.pb5]}>
                      {player.playing_position && player.playing_position.playing_position}
                    </Text>
                    {navigation.getParam('team').admin[0] === player.id
                      ? (
                        <Text style={[styles.playerNameSecondaryText, styles.pb5]}>
                          Team Admin
                      </Text>
                      )
                      : null
                    }
                    <TouchableOpacity onPress={() => this.handleCreateRelationship(player.id)} style={following ? styles.playerFollowingButton : styles.playerFollowButton}>
                      <Text style={following ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
                        {following ? 'Following' : 'Follow'}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.logout} style={styles.playerFollowButton}>
                      <Text style={styles.playerFollowButtonText}>
                        Logout
                    </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        </Content>
        <View style={[styles.footer]}>
          <TouchableOpacity onPress={() => this.handleJoin()} style={styles.footerButton}>
            <UppercasedText style={styles.bottomMainButtonText}>
              {`Join ${team ? team.abbreviated_name : ''}`}
            </UppercasedText>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

Join.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
  getPlayer: PropTypes.func.isRequired,
  createRequest: PropTypes.func.isRequired,
  authUser: PropTypes.shape({}).isRequired,
  createRelationship: PropTypes.func.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.player,
    ...actions.relationship,
    ...actions.request,
    ...actions.team,
  },
)(Join);
