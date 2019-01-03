import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Tabs, Tab } from 'native-base';

import MatchPosts from './MatchPosts';
import MatchStats from './MatchStats';
import MatchTimeline from './MatchTimeline';
import TimeLineUp from './TimeLineUp';

class TabMain extends Component {
    render() {
        return (
            <Tabs>
                <Tab heading="Line-up">
                    <TimeLineUp />
                </Tab>
                <Tab heading="Timeline">
                    <MatchTimeline />
                </Tab>
                <Tab heading="Posts">
                    <MatchPosts />
                </Tab>
                <Tab heading="Stats">
                    <MatchStats />
                </Tab>
            </Tabs>
        )
    }
}

export default TabMain;
