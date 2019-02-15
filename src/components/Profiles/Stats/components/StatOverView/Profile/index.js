import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Thumbnail, Right } from 'native-base';

import styles from '../../../styles';

const psgLogo = require('../../../../../../static/images/psg-logo.png');
const Team1Logo = require('../../../../../../static/images/diego.jpg');

const Profile = () => {
    return (
        <View style={styles.profileOverView}>
	        <View style={styles.profilePictureView}>
                <View style={styles.playerPictureView}>
                    <Image source={Team1Logo} style={styles.playerPicture} />
                </View>
                <View style={styles.playerMainTeamView}>
                    <Image source={psgLogo} style={styles.playerMainTeamPicture} />
                </View>
            </View>
            <View style={styles.profileStatNavigate}>
                <View style={styles.navigateItemView}>
                    <View style={[styles.navigateItemCol, styles.navigateTitleView]}>
                        <View  style={styles.navigateTitleContentView}>
                            <Text style={styles.navigateTitleText}>Appearances</Text>
                        </View>
                        <View style={styles.navigateTitleImageContentView}>
                            <Image source={psgLogo}  style={styles.navigateTitleImage}/>
                        </View>
                    </View>
                    <View style={[styles.navigateItemCol, styles.navigatePointView]}>
                        <View>
                            <Text style={styles.navigatePointText}>22</Text>
                        </View>
                        <Right>
                            <TouchableOpacity onPress={() => navigation.push(paths.client.ProfilesStats)}>
                                <Icon style={[styles.colorBlack, styles.fontSize20, styles.ml10, styles.navigateIcon]} name="ios-arrow-dropright" type="Ionicons" />
                            </TouchableOpacity>
                        </Right>
                    </View>
                </View>

                <View style={styles.navigateItemView}>
                    <View style={[styles.navigateItemCol, styles.navigateTitleView]}>
                        <View  style={styles.navigateTitleContentView}>
                            <Text style={styles.navigateTitleText}>Threat Level</Text>
                        </View>
                    </View>
                    <View style={[styles.navigateItemCol, styles.navigatePointView]}>
                        <View>
                            <Text style={styles.navigatePointText}>14</Text>
                        </View>
                        <Right>
                            <TouchableOpacity onPress={() => navigation.push(paths.client.ProfilesStats)}>
                                <Icon style={[styles.colorBlack, styles.fontSize20, styles.ml10, styles.navigateIcon]} name="ios-arrow-dropright" type="Ionicons" />
                            </TouchableOpacity>
                        </Right>
                    </View>
                </View>

                <View style={styles.navigateItemView}>
                    <View style={[styles.navigateItemCol, styles.navigateTitleView]}>
                        <View  style={styles.navigateTitleContentView}>
                            <Text style={styles.navigateTitleText}>Minutes played</Text>
                        </View>
                    </View>
                    <View style={[styles.navigateItemCol, styles.navigatePointView]}>
                        <View>
                            <Text style={styles.navigatePointText}>246</Text>
                        </View>
                        <Right>
                            <TouchableOpacity onPress={() => navigation.push(paths.client.ProfilesStats)}>
                                <Icon style={[styles.colorBlack, styles.fontSize20, styles.ml10, styles.navigateIcon]} name="ios-arrow-dropright" type="Ionicons" />
                            </TouchableOpacity>
                        </Right>
                    </View>
                </View>

                <View style={styles.navigateItemView}>
                    <View style={[styles.navigateItemCol, styles.navigateTitleView]}>
                        <View  style={styles.navigateTitleContentView}>
                            <Text style={styles.navigateTitleText}>BP Points</Text>
                        </View>
                    </View>
                    <View style={[styles.navigateItemCol, styles.navigatePointView]}>
                        <View>
                            <Text style={styles.navigatePointText}>240</Text>
                        </View>
                        <Right>
                            <TouchableOpacity onPress={() => navigation.push(paths.client.ProfilesStats)}>
                                <Icon style={[styles.colorBlack, styles.fontSize20, styles.ml10, styles.navigateIcon]} name="ios-arrow-dropright" type="Ionicons" />
                            </TouchableOpacity>
                        </Right>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Profile;
