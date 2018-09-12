import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Input, Item, Label } from 'native-base';

class Erdacomplete extends React.Component {
  static suti() {
    return 1 + 1;
  }

  render() {
    const { itemStyle, labelStyle, label, style } = this.props;

    return (
      <View>
        <Item floatingLabel style={itemStyle}>
          <Label style={labelStyle}>
            {label}
          </Label>
          <Input
            style={style}
            onChangeText={text => console.log(text)}
            selectionColor="#fff"
          />
        </Item>
        <ScrollView style={{ height: 100 }}>
          <View style={{ padding: 10 }}>
            <Text>ES54</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text>ES54</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text>ES54</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text>ES54</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Erdacomplete;
