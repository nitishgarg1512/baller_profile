import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { Container, Input, Item, Label } from 'native-base';

import styles from '../common/styles';

import { UppercasedText } from '../../common/components';

import images from '../../../static/images';

class Selection extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Container>
        <View>
          <View style={styles.displayFlexCenterRow}>
            <UppercasedText style={styles.teamSelectionTitle}>
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
          <ScrollView horizontal style={styles.teamScroller}>
            <View style={styles.teamSelectionCard}>
              <View style={styles.teamSelectionCardImage}>
                <Image
                  style={styles.teamCardImage}
                  source={images.hashtag}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.displayFlexCenterColumn}>
                <Text style={styles.teamSelectionCardDetailsText}>
                  19 ballers
                </Text>
                <Text style={styles.teamSelectionCardDetailsText}>
                  Hashtag United
                </Text>
              </View>
            </View>
            <View style={styles.teamSelectionCard}>
              <View style={styles.teamSelectionCardImage}>
                <Image
                  style={styles.teamCardImage}
                  source={images.aftv}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.displayFlexCenterColumn}>
                <Text style={styles.teamSelectionCardDetailsText}>
                  21 ballers
                </Text>
                <Text style={styles.teamSelectionCardDetailsText}>
                  AFTV FC
                </Text>
              </View>
            </View>
            <View style={styles.teamSelectionCard}>
              <View style={styles.teamSelectionCardImage}>
                <Image
                  style={styles.teamCardImage}
                  source={images.hashtag}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.displayFlexCenterColumn}>
                <Text style={styles.teamSelectionCardDetailsText}>
                  19 ballers
                </Text>
                <Text style={styles.teamSelectionCardDetailsText}>
                  Hashtag United
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.bottomMainButton}>
            <UppercasedText style={styles.bottomMainButtonText}>
              I can&#39;t find my team!
            </UppercasedText>
          </TouchableOpacity>
          <Text style={styles.bottomSecondaryText}>
            I don&#39;t play anymore!
          </Text>
        </View>
      </Container>
    );
  }
}

export default Selection;
