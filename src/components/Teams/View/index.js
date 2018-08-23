import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Icon, Thumbnail } from 'native-base';

import selectors from './selectors';
import styles from './styles';

import actions from '../../../actions';
import images from '../../../static/images';
import { paths } from '../../../common/constants';

class TeamsView extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor() {
    super();

    this.state = {
      following: false,
    };
  }

  componentDidMount() {
    const { navigation, getTeam, getTeamPlayers } = this.props;

    const id = navigation.getParam('id');

    getTeam(id)
      .then(() => getTeamPlayers(id));
  }

  render() {
    const { navigation, isLoading, team } = this.props;

    let content = <ActivityIndicator />;

    if (!isLoading && team) {
      content = (
        <React.Fragment>
          <ImageBackground
            style={styles.imageBackground}
            imageStyle={styles.bgImage}
            source={images.profilebg}
          >
            <View style={[styles.headerContainer, styles.py30]}>
              <View style={[styles.flexStartRow]}>
                <TouchableOpacity style={styles.w20} onPress={() => navigation.goBack()}>
                  <Icon name="arrow-left" type="Feather" />
                </TouchableOpacity>
                <View style={styles.searchPlayer}>
                  <Text style={[styles.fontBasic, styles.fontSize20, styles.colorBlack]}>
                    @
                    {team.nickname}
                  </Text>
                </View>
              </View>
              <View style={[styles.flexCenterCol, styles.alignFlexStart, styles.pl30]} />
            </View>
            <ScrollView>
              <View style={styles.profileContent}>
                <View style={styles.profileContentMainCardOverflow}>
                  <View style={styles.borderRadiusCircle}>
                    <Thumbnail
                      style={[styles.profileImage]}
                      source={images.chelsea}
                    />
                  </View>
                  <View style={styles.profileContentMainCard}>
                    <View style={styles.profileContentMainPadding}>
                      <View style={[styles.pl80, styles.flexStartRowItemsCenter]}>
                        <View style={styles.flexRowItemsCenter}>
                          <Icon name="location" type="EvilIcons" style={styles.fontSize15} />
                          <Text style={[styles.fontSize10, styles.fontItalic, styles.colorGray]}>
                            London, UK
                          </Text>
                        </View>
                        <View style={styles.detailsContainer}>
                          <Icon name="cog" type="Entypo" style={styles.settingsIcon} />
                          <TouchableOpacity onPress={() => this.setState({ following: !this.state.following })} style={[this.state.following ? styles.playerFollowingButton : styles.playerFollowButton]}>
                            <Text style={this.state.following ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
                              {this.state.following ? 'Following' : 'Follow'}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={styles.pt20}>
                        <Text style={[styles.fontSize20, styles.fontItalic, styles.colorBlack]}>
                          {team.team_name}
                        </Text>
                        <Text style={[styles.fontSize15, styles.fontItalic, styles.colorGray]}>
                          {`@${team.nickname}`}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.hrLine} />
                    <View style={styles.profileContentMainPadding}>
                      <View style={styles.displayFlexRowBasic}>
                        <View style={styles.scoreAltContent}>
                          <View style={styles.flexStartRow}>
                            <Icon style={styles.colorRed} name="arrow-right" type="Entypo" />
                            <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15, styles.pl5]}>
                              35
                            </Text>
                          </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate(paths.client.ProfilesNationality)}>
                          <View style={styles.conutryContainer}>
                            <View style={styles.flexStartRow}>
                              <Image
                                style={styles.h3w3}
                                source={images.logo}
                                resizeMode="contain"
                              />
                              <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15, styles.pl5]}>
                                84
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.profileContentSecondaryCard, styles.mt20]}>
                  <View style={[styles.profileContentMainPadding]}>
                    <View style={styles.flexSpaceBetweenRow}>
                      <Text style={[styles.fontSize15, styles.fontBasic, styles.colorGray]}>
                        Squad
                      </Text>
                      <Text style={[styles.fontSize15, styles.fontItalic, styles.colorBlack]}>
                        {team && team.players && team.players.length}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.hrLineSecondary} />
                  <View style={styles.profileContentMainPadding}>
                    {team && team.players && team.players.map(player => (
                      <View key={player.id} style={styles.squadPlayer}>
                        <View style={styles.squadContainer}>
                          <View style={styles.borderRadiusCircleSquad}>
                            <Thumbnail
                              style={[styles.profileImageSquad]}
                              source={images.lm}
                            />
                          </View>
                          <View style={styles.playerCardName}>
                            <View style={styles.flexCenterRow}>
                              <Text style={styles.nameText}>
                                {`${player.user.firstName} ${player.user.lastName}&nbsp;`}
                              </Text>
                              <Text style={styles.tagText}>
                                {`@${player.user.username}`}
                              </Text>
                            </View>
                            <Text style={styles.descText}>
                              Striker
                            </Text>
                          </View>
                        </View>
                        <TouchableOpacity style={[styles.playerFollowButton]}>
                          <Text style={styles.playerFollowButtonText}>
                            Admin
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsSquad)}>
                    <View style={[styles.viewSquadContainer, { paddingTop: 10, paddingBottom: 10, borderTopWidth: 0.3, borderColor: 'rgba(0,0,0,.4)' }]}>
                      <Text style={{ fontFamily: 'calibri-italic', textAlign: 'center' }}>
                      View full squad
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={[styles.profileContentSecondaryCard, styles.mt20]}>
                  <View style={styles.profileContentMainPadding}>
                    <View style={styles.flexSpaceBetweenRow}>
                      <Text style={[styles.fontSize15, styles.fontBasic, styles.colorGray]}>
                      Upcoming fixtures
                      </Text>
                      <TouchableOpacity onPress={() => navigation.navigate(paths.client.MatchCreation)}>
                        <Icon name="plus" type="Feather" style={styles.plusIcon} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.hrLineSecondary} />
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </React.Fragment>
      );
    }

    return content;
  }
}

TeamsView.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.user,
    ...actions.team,
  },
)(TeamsView);
