import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from 'native-base';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import images from '../../../static/images';
import { paths } from '../../../common/constants';

class Join extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <View style={styles.displayFlexCenterRowCreation}>
        <Text style={styles.headerMain}>
          AFTV FC SQUAD
        </Text>
      </View>
    ),
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Content>
          <View style={[styles.displayFlexCenterRowCreation, styles.marginTop20]}>
            <UppercasedText style={styles.TeamsJoinMainText}>
              2&nbsp;
            </UppercasedText>
            <UppercasedText style={styles.TeamsJoinSecondaryText}>
              Goalkeepers
            </UppercasedText>
          </View>
          <View style={[{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
            <View style={[styles.displayFlexSpaceBetweenRow, styles.py10, styles.wx80]}>
              <View style={styles.displayFlexCenterColumn}>
                <View style={styles.TeamsJoinCardImage}>
                  <Image
                    style={styles.joinTeamCardImage}
                    source={images.shaarawy}
                    resizeMode="contain"
                  />
                </View>
                <Text style={[styles.playerNameText, styles.py10]}>
                  Dimitri Gbo
                </Text>
                <Text style={[styles.playerNameSecondaryText, styles.pb5]}>
                  Goalkeeper
                </Text>
                <Text style={styles.playerNameSecondaryText}>
                  Team admin
                </Text>
                <TouchableOpacity style={[styles.playerFollowButton]}>
                  <Text style={styles.playerFollowButtonText}>
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.displayFlexCenterColumn}>
                <View style={styles.TeamsJoinCardImage}>
                  <Image
                    style={styles.joinTeamCardImage}
                    source={images.shaarawy}
                    resizeMode="contain"
                  />
                </View>
                <Text style={[styles.playerNameText, styles.py10]}>
                  Dimitri Gbo
                </Text>
                <Text style={[styles.playerNameSecondaryText, styles.pb5]}>
                  Goalkeeper
                </Text>
                <Text style={styles.playerNameSecondaryText}>
                  Team admin
                </Text>
                <TouchableOpacity style={[styles.playerFollowButton]}>
                  <Text style={styles.playerFollowButtonText}>
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.displayFlexCenterRowCreation, styles.marginTop50]}>
            <UppercasedText style={styles.TeamsJoinMainText}>
              6&nbsp;
            </UppercasedText>
            <UppercasedText style={styles.TeamsJoinSecondaryText}>
              Defenders
            </UppercasedText>
          </View>
          <View style={[{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
            <View style={[styles.displayFlexSpaceBetweenRow, styles.py10, styles.wx80]}>
              <View style={styles.displayFlexCenterColumn}>
                <View style={styles.TeamsJoinCardImage}>
                  <Image
                    style={styles.joinTeamCardImage}
                    source={images.shaarawy}
                    resizeMode="contain"
                  />
                </View>
                <Text style={[styles.playerNameText, styles.py10]}>
                  Dimitri Gbo
                </Text>
                <Text style={[styles.playerNameSecondaryText, styles.pb5]}>
                  Goalkeeper
                </Text>
                <Text style={styles.playerNameSecondaryText}>
                  Team admin
                </Text>
                <TouchableOpacity style={[styles.playerFollowButton]}>
                  <Text style={styles.playerFollowButtonText}>
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.displayFlexCenterColumn}>
                <View style={styles.TeamsJoinCardImage}>
                  <Image
                    style={styles.joinTeamCardImage}
                    source={images.shaarawy}
                    resizeMode="contain"
                  />
                </View>
                <Text style={[styles.playerNameText, styles.py10]}>
                  Dimitri Gbo
                </Text>
                <Text style={[styles.playerNameSecondaryText, styles.pb5]}>
                  Goalkeeper
                </Text>
                <Text style={styles.playerNameSecondaryText}>
                  Team admin
                </Text>
                <TouchableOpacity style={[styles.playerFollowButton]}>
                  <Text style={styles.playerFollowButtonText}>
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Content>
        <View style={[styles.footer]}>
          <TouchableOpacity onPress={() => navigation.navigate(paths.client.ProfilesCreation)} style={styles.footerButton}>
            <UppercasedText style={styles.bottomMainButtonText}>
              Join AFTV FC
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

export default Join;
