import React from 'react';
import { View, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from '../../styles';
import Team from './tabItems/team';
import You from './tabItems/you';

class TabsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Team' },
                { key: 'second', title: 'You' },
            ],
        };
    }

    render() {
        const { index, routes } = this.state;
        const { onOpenJoinTeam, onOpenMatchRequest } = this.props;

        return (
            <TabView
                navigationState={this.state}
                tabStyle={styles.bgWhite}
                renderScene={SceneMap({
                    first: () => <Team onOpenJoinTeam={onOpenJoinTeam} onOpenMatchRequest={onOpenMatchRequest} />,
                    second: () => <You />,
                })}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        renderLabel={(labelProps) => {
                            const { route: { key, title } } = labelProps;

                            return (
                                <View style={styles.flexCenterColumn}>
                                    <Text style={routes[index].key === key ? styles.activeTab : styles.disabledTab}>
                                        {title}
                                    </Text>
                                </View>
                            );
                        }}
                        indicatorStyle={styles.bgBlue}
                        labelStyle={styles.labelText}
                        style={styles.bgWhite}
                    />
                )}
                onIndexChange={changedIndex => this.setState({ index: changedIndex })}
                initialLayout={styles.h100w100}
            />
        );
    }
}

export default TabsView;
