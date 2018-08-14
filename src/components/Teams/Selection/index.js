import PropTypes from 'prop-types';
import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { Container, Input, Item, Label } from 'native-base';

import { TeamModal } from './components';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import images from '../../../static/images';
import { aftv, hashtag } from '../../../static/json';
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

  toggleModal = (team) => {
    const { showModal } = this.state;

    this.setState({
      showModal: !showModal,
      selectedTeam: team,
    });
  }

  render() {
    const { navigation } = this.props;
    const { showModal, selectedTeam } = this.state;

    return (
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
                <TouchableOpacity onPress={() => this.toggleModal(hashtag)}>
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
                        Hashtag United
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.toggleModal(aftv)}>
                  <View style={styles.TeamsSelectionCard}>
                    <View style={styles.TeamsSelectionCardImage}>
                      <Image
                        style={styles.teamCardImage}
                        source={images.aftv}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={styles.displayFlexCenterColumn}>
                      <Text style={styles.TeamsSelectionCardDetailsText}>
                        21 ballers
                      </Text>
                      <Text style={styles.TeamsSelectionCardDetailsText}>
                        AFTV FC
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.toggleModal(hashtag)}>
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
                        Hashtag United
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
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
}

Selection.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Selection;
