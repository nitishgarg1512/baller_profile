import React from 'react';
import { View } from 'react-native';

import { Item1, Item2, Item3, Item4, Item5, Item6 } from '../items';
import styles from '../../../styles';

const Team = (props) => {

    const { onOpenJoinTeam, onOpenMatchRequest } = props;
    return (
        <View style={styles.teamContainer}>
            <Item1 />
            <Item2 />
            <Item3 onOpenJoinTeam={onOpenJoinTeam} />
            <Item4 />
            <Item5 onOpenMatchRequest={onOpenMatchRequest}/>
            <Item6 />
        </View>
    );
}

export default Team;
