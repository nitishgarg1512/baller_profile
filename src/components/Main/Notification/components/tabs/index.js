import React from 'react';
import { Container, Tab, Tabs } from 'native-base';

import Team from './tabItems/team';
import You from './tabItems/you';

const TabsView = () => {
    return (
        <Container>
            <Tabs>
                <Tab heading="Team">
                    <Team />
                </Tab>
                <Tab heading="You">
                    <You />
                </Tab>
            </Tabs>
        </Container>
    );
}

export default TabsView;
