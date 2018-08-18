import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-native-modalbox';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon, Thumbnail } from 'native-base';

import styles from '../../../common/styles';

import { UppercasedText } from '../../../../common/components';

import images from '../../../../../static/images';
import { paths } from '../../../../../common/constants';

const TeamModal = ({ visible, toggleModal, selectedTeam = {}, navigation }) => (
  <Modal
    isOpen={visible}
    style={styles.modal}
  >
    <View style={styles.modalContent}>
      {selectedTeam && visible ? (
        <React.Fragment>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Icon style={styles.headerIcon} type="EvilIcons" name="close" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContainer}>
            <View style={styles.displayFlexCenterRow}>
              <UppercasedText style={styles.teamModalTitle}>
                {selectedTeam.name}
              </UppercasedText>
            </View>
            <View style={styles.TeamsSelectionModalCard}>
              <View style={styles.TeamsSelectionModalCardImage}>
                <Image
                  style={styles.teamCardImage}
                  source={selectedTeam.image}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.displayFlexCenterColumn}>
                <Text style={styles.TeamsSelectionModalDetailsText}>
                  {selectedTeam.ballers}
                </Text>
                <Text style={styles.TeamsSelectionModalDetailsText}>
                    Ballers
                </Text>
              </View>
              <View style={styles.displayFlexCenterColumn}>
                <View style={styles.teamModalLeagueContainer}>
                  <Thumbnail style={styles.thumbnailProp} small source={images.league} />
                  <Text style={styles.teamModalLeague}>
                    {selectedTeam.league}
                  </Text>
                </View>
                <View style={styles.teamModalProps}>
                  <Thumbnail style={styles.thumbnailProp} small source={images.dimitri} />
                  <Text style={styles.teamModalLeague}>
                    {selectedTeam.captain}
                      (Captain)
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.footerModal}>
            <TouchableOpacity onPress={() => navigation.navigate(paths.client.TeamsJoin)} style={styles.footerButtonModal}>
              <UppercasedText style={styles.bottomMainButtonTextModal}>
                I play for this team
              </UppercasedText>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      )
        : null
    }
    </View>
  </Modal>
);

TeamModal.defaultProps = {
  selectedTeam: undefined,
};

TeamModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  selectedTeam: PropTypes.shape({}),
  toggleModal: PropTypes.func.isRequired,
  navigation: PropTypes.shape({}).isRequired,
};

export default TeamModal;