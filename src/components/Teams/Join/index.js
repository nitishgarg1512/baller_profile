import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from 'native-base';
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
          {navigation.getParam('team').abbreviated_name}
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
      1: false,
      2: false,
      3: false,
      4: false,
    };
  }

  componentDidMount() {
    const { getPlayer, navigation } = this.props;

    const { players } = navigation.getParam('team');

    if (players.length > 1) {
      const playersPromise = players.map(player => console.error(player));

      return Promise.all(playersPromise)
        .then(result => console.error(result));
    }

    return getPlayer(players)
      .then(({ result }) => this.setState({ players: [result.data] }));
  }

  toggleFollow = (id) => {
    this.setState({
      [id]: !this.state[id],
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

    return createRequest(requestData);
  }

  render() {
    const { navigation, createRelationship } = this.props;
    const { players, team } = this.state;

    return (
      <Container>
        <Content>
          <TouchableOpacity onPress={() => this.setState({ 1: true, 2: true, 3: true, 4: true })}>
            <View style={[{ backgroundColor: '#0071c0' }, styles.displayFlexCenterRowCreation, styles.py20]}>
              <UppercasedText style={styles.followAllText}>
                Click to follow all players
              </UppercasedText>
            </View>
          </TouchableOpacity>
          {/* <View style={[{ borderTopWidth: 0.6, borderColor: 'rgba(0,0,0,.3)', borderBottomWidth: 0.6 }, styles.displayFlexCenterRowCreation, styles.py20]}>
            <UppercasedText style={styles.TeamsJoinMainText}>
              2&nbsp;
            </UppercasedText>
            <UppercasedText style={styles.TeamsJoinSecondaryText}>
              Goalkeepers
            </UppercasedText>
          </View> */}
          <View style={[{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
            {players && players.map(player => (
              <TouchableOpacity key={player.id} style={{ paddingTop: 15, paddingBottom: 15, flex: 1, borderRightWidth: 0.6, borderRightColor: 'rgba(0,0,0,.3)' }} onPress={() => navigation.navigate(paths.client.ProfilesView, { id: player.id })}>
                <View style={styles.displayFlexCenterColumn}>
                  <View style={styles.TeamsJoinCardImage}>
                    <Image
                      style={styles.joinTeamCardImage}
                      source={player.user.profile_pic ? player.user.profile_pic : images.user}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[styles.playerNameText, styles.py10]}>
                    {player.user.first_name}
                    {' '}
                    {player.user.last_name}
                  </Text>
                  <Text style={[styles.playerNameSecondaryText, styles.pb5]}>
                    {player.playing_position}
                  </Text>
                  <TouchableOpacity onPress={() => createRelationship(player.id)} style={[this.state[1] ? styles.playerFollowingButton : styles.playerFollowButton]}>
                    <Text style={this.state[1] ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
                      {this.state[1] ? 'Following' : 'Follow'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
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
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.player,
    ...actions.relationship,
    ...actions.request,
  },
)(Join);
