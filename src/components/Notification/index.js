import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Icon, Content } from 'native-base';

import Modal from 'react-native-modalbox';

import actions from '../../actions';

import styles from './styles';
import { Header, TabsView } from './components';

import { UppercasedText } from '../common/components';

const diegoImg = require('../../static/images/diego.jpg');

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
            <Modal
                style={styles.modal}
                position='center'
                isOpen={this.state.joinTeamVisible}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalViewImage}>
                        <Image source={diegoImg} style={styles.modalImage} />
                    </View>
                    <Text style={styles.modalName}>Diego Costa</Text>
                    <Text style={styles.modalUsername}>@Diego</Text>
                    <Text style={styles.modalMessage}>Want to join Chelsea</Text>
                </View>
                <View style={styles.footerModal}>
                    <TouchableOpacity onPress={this.joinTeamVisible.bind(this, false)} style={styles.footerButtonModal}>
                        <UppercasedText style={styles.bottomMainButtonTextModal}>
                            Join
                        </UppercasedText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.joinTeamVisible.bind(this, false)} style={styles.footerButtonModal2}>
                        <Text>Reject</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }

    matchRequestVisible(visible) {
        this.setState({ matchRequestVisible: visible });
    }

    matchRequestPopup() {
        return (
            <Modal
                style={styles.modal}
                position='center'
                isOpen={this.state.matchRequestVisible}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Match Request!</Text>
                    <View style={styles.modalViewImage}>
                        <Image source={diegoImg} style={styles.modalImage} />
                    </View>
                    <Text style={styles.modalName}>Barcelona vs Chelsea</Text>
                    <Text style={styles.modalUsername}>Blaugrana</Text>
                    <Text style={styles.modalMessage}>Do you accept the match?</Text>
                </View>
                <View style={styles.footerModal}>
                    <TouchableOpacity onPress={this.matchRequestVisible.bind(this, false)} style={styles.footerButtonModal}>
                        <UppercasedText style={styles.bottomMainButtonTextModal}>
                            PLAY THIS MATCH
                        </UppercasedText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.matchRequestVisible.bind(this, false)} style={styles.footerButtonModal2}>
                        <Text>Reject</Text>
                    </TouchableOpacity>
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