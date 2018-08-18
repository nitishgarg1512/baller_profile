import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon, Thumbnail, Right } from 'native-base';

import styles from './styles';

import images from '../../../static/images';
import { paths } from '../../../common/constants';

class ProfileView extends React.Component {
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
                  @ Dimzinho
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
                    source={images.lm}
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
                        Dimitro Gbo
                      </Text>
                      <Text style={[styles.fontSize15, styles.fontItalic, styles.colorGray]}>
                        Centre Midfielder for stricktly Ballers
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
                            305
                            </Text>
                          </View>
                          <View style={styles.flexStartRow}>
                            <Icon style={styles.colorScoreBlue} name="arrow-left" type="Entypo" />
                            <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15, styles.pl5]}>
                            11,035
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.scoreContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate(paths.client.ProfilesConnections)}>
                          <View style={styles.scoreContent}>
                            <Icon style={styles.colorGreen} name="arrow-up" type="Entypo" />
                            <Text style={[styles.fontBasic, styles.colorBlack, styles.fontSize15, styles.pl5]}>
                            15009
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
                              12,041
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
                        22
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
                          101
                        </Text>
                        <Icon style={[styles.colorBlack, styles.fontSize20, styles.ml10]} name="ios-arrow-dropright" type="Ionicons" />
                      </View>
                    </Right>
                  </View>
                </View>
              </View>
              <View style={[styles.profileContentSecondaryCard, styles.mt20]}>
                <View style={styles.profileContentMainPadding}>
                  <View style={styles.flexSpaceBetweenRow}>
                    <Text style={[styles.fontSize15, styles.fontBasic, styles.colorGray]}>
                      Ratings
                    </Text>
                    <Text style={[styles.fontSize15, styles.fontItalic, styles.colorBlack]}>
                      12 Attributes - 105 Ratings
                    </Text>
                  </View>
                </View>
                <View style={styles.hrLineSecondary} />
                <View style={styles.profileContentMainPadding}>
                  <View style={styles.skillPillContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate(paths.client.ProfilesRating)} style={[styles.skillPill]}>
                      <Text style={styles.skillPillText}>
                        Dribbling
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.skillPillScore]}>
                      <Text style={styles.skillPillText}>
                        19
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
}

ProfileView.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default ProfileView;
