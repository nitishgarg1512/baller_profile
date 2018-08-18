import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon, Thumbnail } from 'native-base';

import styles from './styles';

import images from '../../../static/images';
import { paths } from '../../../common/constants';

class TeamsView extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigation } = this.props;

    return (
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
                  @Ballers2018
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
                        <TouchableOpacity onPress={() => navigation.navigate(paths.client.ProfilesConnections)} style={[styles.playerFollowButton]}>
                          <Text style={styles.playerFollowButtonText}>
                            Follow
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.pt20}>
                      <Text style={[styles.fontSize20, styles.fontItalic, styles.colorBlack]}>
                        Strictly Ballers
                      </Text>
                      <Text style={[styles.fontSize15, styles.fontItalic, styles.colorGray]}>
                        @Ballers2018
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
                  <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsSquad)}>
                    <View style={styles.flexSpaceBetweenRow}>
                      <Text style={[styles.fontSize15, styles.fontBasic, styles.colorGray]}>
                        Squad
                      </Text>
                      <Text style={[styles.fontSize15, styles.fontItalic, styles.colorBlack]}>
                        14 players
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.hrLineSecondary} />
                <View style={styles.profileContentMainPadding}>
                  <View style={styles.squadPlayer}>
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
                            Lionel messi&nbsp;
                          </Text>
                          <Text style={styles.tagText}>
                            @LioMessi
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
                  <View style={styles.squadPlayer}>
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
                            Lionel messi&nbsp;
                          </Text>
                          <Text style={styles.tagText}>
                            @LioMessi
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
                </View>
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
}

TeamsView.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default TeamsView;
