import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Thumbnail, Right } from 'native-base';

import styles from '../../../styles';

const GeneralStats = () => {
    return (
        <View style={styles.defenceOverView}>
            <View style={styles.profileStatNavigate}>
                <View style={styles.navigateItemView}>
                    <View style={[styles.navigateItemSectionCol, styles.navigateTitleView]}>
                        <View  style={styles.navigateTitleContentView}>
                            <Text style={[styles.navigateTitleText, styles.navigateSectionTitleText]}>General stats</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.navigateItemView}>
                    <View style={[styles.navigateItemCol, styles.navigateTitleView]}>
                        <View  style={styles.navigateTitleContentView}>
                            <Text style={styles.navigateTitleText}>colades won</Text>
                        </View>
                    </View>
                    <View style={[styles.navigateItemCol, styles.navigatePointView]}>
                        <View>
                            <Text style={styles.navigatePointText}>6</Text>
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
                            <Text style={styles.navigateTitleText}>Teams played against</Text>
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
                            <Text style={styles.navigateTitleText}>Games missed through injury</Text>
                        </View>
                    </View>
                    <View style={[styles.navigateItemCol, styles.navigatePointView]}>
                        <View>
                            <Text style={styles.navigatePointText}>3</Text>
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

export default GeneralStats;
