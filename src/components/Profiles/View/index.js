import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { isEmpty, find } from 'lodash';
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Icon, Thumbnail, Right } from 'native-base';

import selectors from './selectors';
import styles from './styles';

import actions from '../../../actions';
import images from '../../../static/images';
import { paths } from '../../../common/constants';

class ProfileView extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor() {
    super();

    this.state = {
      nation: '',
    };
  }

  componentDidMount() {
    const { navigation, getPlayer, getPlayersByNation, getAuthPlayer, nations, getNations } = this.props;

    const id = navigation.getParam('id');

    getAuthPlayer();

    getPlayer(id)
      .then(({ result }) => {
        getNations()
          .then(({ result: nationsResult }) => {
            this.setState({
              nation: find(nationsResult.data, { id: result.data.nationality }),
            });
            getPlayersByNation(result.data.nationality);
          });
      });
  }

  handleCreateRelationship = () => {
    const { getPlayer, navigation, createRelationship } = this.props;

    const id = navigation.getParam('id');

    createRelationship(id)
      .then(() => {
        getPlayer(id);
      });
  }

  render() {
    const { navigation, player, isLoading, players, authPlayer, nations } = this.props;
    const { nation } = this.state;

    let content = (
      <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="rgba(0,0,0,.6)" />
      </View>
    );

    if (!isEmpty(player) && !isLoading && player.user) {
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
                    {`@${player.user.username}`}
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
                      source={player.user.profile_pic ? { uri: player.user.profile_pic } : images.user}
                    />
                  </View>
                  <View style={styles.profileContentMainCard}>
                    <View style={styles.profileContentMainPadding}>
                      <View style={[styles.pl80, styles.flexStartRowItemsCenter]}>
                        <View style={styles.flexRowItemsCenter}>
                          <Icon name="location" type="EvilIcons" style={styles.fontSize15} />
                          <Text style={[styles.fontSize10, styles.fontItalic, styles.colorGray]}>
                            {(nation && nation.country) || 'Unknown'}
                          </Text>
                        </View>
                        <View style={styles.detailsContainer}>
                          <Icon name="cog" type="Entypo" style={styles.settingsIcon} />
                          <TouchableOpacity onPress={() => this.handleCreateRelationship()} style={player.followers.indexOf(authPlayer.id) !== -1 ? styles.playerFollowingButton : styles.playerFollowButton}>
                            <Text style={player.followers.indexOf(authPlayer.id) !== -1 ? styles.playerFollowingButtonText : styles.playerFollowButtonText}>
                              {player.followers.indexOf(authPlayer.id) !== -1 ? 'Following' : 'Follow'}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={styles.pt20}>
                        <Text style={[styles.fontSize20, styles.fontItalic, styles.colorBlack]}>
                          {`${player.user.first_name} ${player.user.last_name}`}
                        </Text>
                        <Text style={[styles.fontSize15, styles.fontItalic, styles.colorGray]}>
                          {player.playing_position} for stricktly Ballers
                        </Text>
                      </View>
                    </View>
                    <View style={styles.hrLine} />
                    <View style={styles.profileContentMainPadding}>
                      <View style={styles.displayFlexRowBasic}>
                        <View style={styles.scoreAltContent}>
                          <TouchableOpacity onPress={() => navigation.navigate(paths.client.ProfilesConnections)}>
                            <View style={styles.flexStartRow}>
                              <Icon style={styles.colorRed} name="arrow-right" type="Entypo" />
                              <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15, styles.pl5]}>
                                0
                              </Text>
                            </View>
                            <View style={styles.flexStartRow}>
                              <Icon style={styles.colorScoreBlue} name="arrow-left" type="Entypo" />
                              <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15, styles.pl5]}>
                                0
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.scoreContainer}>
                          <TouchableOpacity onPress={() => navigation.navigate(paths.client.ProfilesConnections)}>
                            <View style={styles.scoreContent}>
                              <Icon style={styles.colorGreen} name="arrow-up" type="Entypo" />
                              <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15, styles.pl5]}>
                                0
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate(paths.client.ProfilesNationality)}>
                          <View style={styles.conutryContainer}>
                            <View style={styles.flexStartRow}>
                              <Image
                                style={styles.h5w5}
                                source={images.england}
                                resizeMode="contain"
                              />
                              <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15, styles.pl5]}>
                                {players.length}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.profileContentSecondaryCard, styles.mt20]}>
                  <View style={styles.profileContentMainPadding}>
                    <Text style={[styles.fontSize15, styles.fontBasic, styles.colorGray]}>
                      Appearances
                    </Text>
                  </View>
                  <View style={styles.hrLineSecondary} />
                  <View style={styles.profileContentMainPadding}>
                    <View style={[styles.flexCenterRow, styles.mt10]}>
                      <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15]}>
                        2017/2018
                      </Text>
                      <Right>
                        <View style={styles.flexCenterRow}>
                          <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15]}>
                            {player.matches_played}
                          </Text>
                          <Icon style={[styles.colorBlack, styles.fontSize20, styles.ml10]} name="ios-arrow-dropright" type="Ionicons" />
                        </View>
                      </Right>
                    </View>
                    <View style={[styles.flexCenterRow, styles.mt10]}>
                      <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15]}>
                        Total
                      </Text>
                      <Right>
                        <View style={styles.flexCenterRow}>
                          <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15]}>
                            {player.matches_played}
                          </Text>
                          <Icon style={[styles.colorBlack, styles.fontSize20, styles.ml10]} name="ios-arrow-dropright" type="Ionicons" />
                        </View>
                      </Right>
                    </View>
                  </View>
                </View>
                <View style={[styles.profileContentSecondaryCard, styles.mt20]}>
                  <View style={styles.profileContentMainPadding}>
                    <TouchableOpacity onPress={() => navigation.navigate(paths.client.ProfilesRating, { player })}>
                      <View style={styles.flexSpaceBetweenRow}>
                        <Text style={[styles.fontSize15, styles.fontBasic, styles.colorGray]}>
                          Ratings
                        </Text>
                        <Text style={[styles.fontSize15, styles.fontItalic, styles.colorBlack]}>
                          0 Attributes - 0 Ratings
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.hrLineSecondary} />
                  <View style={styles.profileContentMainPadding}>
                    <View style={styles.skillPillContainer}>
                      <TouchableOpacity style={[styles.skillPill]}>
                        <Text style={styles.skillPillText}>
                          Dribbling
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.skillPillScore]}>
                        <Text style={styles.skillPillText}>
                          0
                        </Text>
                      </TouchableOpacity>
                      <Right>
                        <Icon style={[styles.colorLightBlue, styles.fontSize30, styles.ml10]} name="plus" type="EvilIcons" />
                      </Right>
                    </View>
                  </View>
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

ProfileView.propTypes = {
  authPlayer: PropTypes.shape({}).isRequired,
  createRelationship: PropTypes.func.isRequired,
  getAuthPlayer: PropTypes.func.isRequired,
  getPlayer: PropTypes.func.isRequired,
  getPlayersByNation: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  player: PropTypes.shape({}).isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(
  selectors,
  {
    ...actions.player,
    ...actions.players,
    ...actions.relationship,
    ...actions.nations,
  },
)(ProfileView);
