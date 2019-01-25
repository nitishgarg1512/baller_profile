import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { Container, Icon, Content } from 'native-base';

import Modal from 'react-native-modalbox';

import actions from '../../actions';

import styles from './styles';
import { Header, TabsView } from './components';

import { UppercasedText } from '../common/components';

class Notification extends React.Component {
    static navigationOptions = {
        headerTitle: (
            <Text style={styles.navigationText}>
                Notification
          </Text>
        ),
        headerStyle: {
            backgroundColor: '#0071c0',
        },
        headerTintColor: 'white',
    }

    constructor(props) {
        super(props);
        this.state = {
            joinTeamVisible: false,
            matchRequestVisible: false,
        };
    }

    joinTeamVisible(visible) {
        this.setState({ joinTeamVisible: visible });
    }

    joinTeamPopup() {
        return (
            <Container>
                <Content>
                    <View style={styles.modalContainer}>
                        <View style={styles.displayFlexCenterRow}>
                            <UppercasedText style={styles.TeamsSelectionTitle2}>
                                You're almost there!
              </UppercasedText>
                        </View>
                        <View style={styles.TeamsSelectionModalCard}>
                            <View style={styles.TeamsSelectionModalCardImage}>
                                <Image
                                    style={styles.teamCardImage}
                                    source={selectedTeam && selectedTeam.team_badge ? { uri: selectedTeam.team_badge } : images.team}
                                    resizeMode="cover"
                                />
                            </View>
                            <View style={styles.displayFlexCenterColumn}>
                                <Text style={styles.TeamsSelectionModalDetailsText2}>
                                    The {navigation.getParam('team_name') || ' '} team captain and team admins have been notified... They will add you to the squad as soon as posible
                </Text>
                            </View>
                        </View>
                    </View>
                </Content>
                <View style={styles.footerModal}>
                    <TouchableOpacity onPress={this.onClose} style={styles.footerButtonModal}>
                        <UppercasedText style={styles.bottomMainButtonTextModal}>
                            JOIN
            </UppercasedText>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }

    matchRequestVisible(visible) {
        this.setState({ matchRequestVisible: visible });
    }

    matchRequestPopup() {
        return (
            <Modal
                style={styles.modal}
                isOpen={this.state.matchRequestVisible}
            >
                <View>
                    <View><Text>Match Request!</Text></View>
                </View>
            </Modal>
        );
    }

    render() {
        const { navigation } = this.props;
        const joinTeamPopup = this.joinTeamPopup();
        const matchRequestPopup = this.matchRequestPopup();
        return (
            <View style={styles.container}>
                {joinTeamPopup}
                {matchRequestPopup}
                <TabsView onOpenJoinTeam={this.joinTeamVisible.bind(this, true)} onOpenMatchRequest={this.matchRequestVisible.bind(this, true)} />
            </View>
        )
    }
}

Notification.propTypes = {
    navigation: PropTypes.shape({}).isRequired,
};

export default connect(
    null,
    {
        ...actions.authentication,
    },
)(Notification);