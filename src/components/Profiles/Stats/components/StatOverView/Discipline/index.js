import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Thumbnail, Right } from 'native-base';

import styles from '../../../styles';

const Discipline = () => {
    return (
        <View style={styles.defenceOverView}>
            <View style={styles.profileStatNavigate}>
                <View style={styles.navigateItemView}>
                    <View style={[styles.navigateItemSectionCol, styles.navigateTitleView]}>
                        <View  style={styles.navigateTitleContentView}>
                            <Text style={[styles.navigateTitleText, styles.navigateSectionTitleText]}>Discipline</Text>
                        </View>
                    </View>
                    <View style={[styles.navigateItemSectionCol, styles.navigatePointView]}>
                        <View style={styles.navigateSectionTitleRightView}>
                            <Text style={styles.navigateSectionTitleRightText}>BP Points</Text>
                            <Text style={styles.navigateSectionTitleRightValueText}>  -23</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.navigateItemView}>
                    <View style={[styles.navigateItemCol, styles.navigateTitleView]}>
                        <View  style={styles.navigateTitleContentView}>
                            <Text style={styles.navigateTitleText}>Fouls</Text>
                        </View>
                    </View>
                    <View style={[styles.navigateItemCol, styles.navigatePointView]}>
                        <View>
                            <Text style={styles.navigatePointText}>20</Text>
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
                            <Text style={styles.navigateTitleText}>Yellow cards</Text>
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

                <View style={styles.navigateItemView}>
                    <View style={[styles.navigateItemCol, styles.navigateTitleView]}>
                        <View  style={styles.navigateTitleContentView}>
                            <Text style={styles.navigateTitleText}>Red cards</Text>
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

export default Discipline;
