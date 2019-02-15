import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Thumbnail, Right } from 'native-base';

import styles from '../../../styles';

const psgLogo = require('../../../../../../static/images/psg-logo.png');
const Team1Logo = require('../../../../../../static/images/diego.jpg');

const Defence = () => {
    return (
        <View style={styles.defenceOverView}>
            <View style={styles.profileStatNavigate}>
                <View style={styles.navigateItemView}>
                    <View style={[styles.navigateItemSectionCol, styles.navigateTitleView]}>
                        <View  style={styles.navigateTitleContentView}>
                            <Text style={[styles.navigateTitleText, styles.navigateSectionTitleText]}>Defence</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.navigateItemView}>
                    <View style={[styles.navigateItemCol, styles.navigateTitleView]}>
                        <View  style={styles.navigateTitleContentView}>
                            <Text style={styles.navigateTitleText}>Clean sheets</Text>
                        </View>
                        <View style={styles.navigateTitleImageContentView}>
                            <Image source={psgLogo}  style={styles.navigateTitleImage}/>
                        </View>
                    </View>
                    <View style={[styles.navigateItemCol, styles.navigatePointView]}>
                        <View>
                            <Text style={styles.navigatePointText}>10</Text>
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
                            <Text style={styles.navigateTitleText}>Goals conceded</Text>
                        </View>
                        <View style={styles.navigateTitleImageContentView}>
                            <Image source={psgLogo}  style={styles.navigateTitleImage}/>
                        </View>
                    </View>
                    <View style={[styles.navigateItemCol, styles.navigatePointView]}>
                        <View>
                            <Text style={styles.navigatePointText}>11</Text>
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
                            <Text style={styles.navigateTitleText}>Own Goals</Text>
                        </View>
                    </View>
                    <View style={[styles.navigateItemCol, styles.navigatePointView]}>
                        <View>
                            <Text style={styles.navigatePointText}>0</Text>
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
                            <Text style={styles.navigateTitleText}>Penalties conceded</Text>
                        </View>
                    </View>
                    <View style={[styles.navigateItemCol, styles.navigatePointView]}>
                        <View>
                            <Text style={styles.navigatePointText}>2</Text>
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

export default Defence;
