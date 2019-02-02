import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Thumbnail, Right, Icon } from 'native-base';

import styles from './styles';

import { UppercasedText } from '../../common/components';

import images from '../../../static/images';

class Rating extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={styles.navigationText}>
        Rate this player
      </Text>
    ),
    headerStyle: {
      backgroundColor: '#0071c0',
    },
    headerTintColor: 'white',
  }

  constructor() {
    super();

    this.state = {
      player: undefined,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;

    this.setState({
      player: navigation.getParam('player'),
    });
  }

  render() {
    const { player } = this.state;

    let content = (
      <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="rgba(0,0,0,.6)" />
      </View>
    );

    if (player) {
      content = (
        <React.Fragment>
          <View style={styles.ratingContainer}>
            <ScrollView style={styles.mb40}>
              <View style={styles.ratingContent}>
                <View style={styles.alternatePlayerCard}>
                  <View style={styles.flexCenterRow}>
                    <View style={styles.borderRadiusCircle}>
                      <Thumbnail
                        style={[styles.profileImage]}
                        source={player.user.profile_image || images.user}
                      />
                    </View>
                    <View style={styles.playerCardName}>
                      <View style={styles.flexCenterRow}>
                        <Text style={styles.nameText}>
                          {player.user.first_name} {player.user.last_name}
                        </Text>
                      </View>
                      <Text style={styles.descText}>
                        {player.playing_position.playing_position}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.flexItemsEndColumn}>
                    <Text style={styles.attributeText}>
                      0 Attributes
                    </Text>
                    <Text style={styles.attributeText}>
                      0 Ratings
                    </Text>
                  </View>
                </View>
                <View style={styles.hrLineSecondary} />
                <View style={styles.skillsContainer}>
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
                  <View style={styles.skillPillContainer}>
                    <TouchableOpacity style={[styles.skillPill]}>
                      <Text style={styles.skillPillText}>
                        Shot Accuracy
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
                  <View style={styles.skillPillContainer}>
                    <TouchableOpacity style={[styles.skillPill]}>
                      <Text style={styles.skillPillText}>
                        Tackling
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
                  <View style={styles.skillPillContainer}>
                    <TouchableOpacity style={[styles.skillPill]}>
                      <Text style={styles.skillPillText}>
                        Mentar Strength
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
                <View style={styles.hrLineSecondary} />
                <View style={styles.attackingContainer}>
                  <View style={{flex: 1}} />
                  <View style={{flex: 1}}>
                    <Text style={styles.attackingText}>
                      Attacking
                    </Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                      <Icon style={styles.headerIcon} type="EvilIcons" name="close" />
                  </View>
                </View>
                <View style={styles.hrLineSecondary} />
                <View style={styles.secondarySkillsContainer}>
                  <View style={styles.secondarySkillsContent}>
                    <TouchableOpacity style={styles.skillButton}>
                      <Text style={styles.skillButtonText}>
                        Finishing
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skillButton}>
                      <Text style={styles.skillButtonText}>
                        Long Range Shots
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skillButton}>
                      <Text style={styles.skillButtonText}>
                        Dribbling
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillsButtonContentAlternate}>
                    <TouchableOpacity style={styles.skillButtonAlternate}>
                      <Text style={styles.skillButtonText}>
                        Counterattacking
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skillButton}>
                      <Text style={styles.skillButtonText}>
                        Assists
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skillButton}>
                      <Text style={styles.skillButtonText}>
                        Through Balls
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillsButtonContentAlternate}>
                    <TouchableOpacity style={styles.skillButtonAlternate}>
                      <Text style={styles.skillButtonText}>
                        Heading on Goal
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skillButtonAlternate}>
                      <Text style={styles.skillButtonText}>
                        Off Ball Runs
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.flexItemsBeforeEnd}>
                  <View style={styles.flexItemsBeforeEndItem}>
                      <TouchableOpacity>
                        <Text style={styles.flexItemsBeforeEndText}>Defending</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.flexItemsBeforeEndItem}>
                    <TouchableOpacity>
                      <Text style={styles.flexItemsBeforeEndText}>Attracking</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.footerButton}>
              <UppercasedText style={styles.bottomMainButtonText}>
                Done
              </UppercasedText>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      );
    }

    return content;
  }
}

export default Rating;
