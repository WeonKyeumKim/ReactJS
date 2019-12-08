import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

export default class FlatListBasic extends React.Component {
    render() {
      return (      
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            {key: 'Devin 2'},
            {key: 'Jackson 2'},
            {key: 'James 2'},
            {key: 'Joel 2'},
            {key: 'John 2'},
            {key: 'Jillian 2'},
            {key: 'Jimmy 2'},
            {key: 'Julie 2'},
            {key: 'Devin 3'},
            {key: 'Jackson 3'},
            {key: 'James 3'},
            {key: 'Joel 3'},
            {key: 'John 3'},
            {key: 'Jillian 3'},
            {key: 'Jimmy 3'},
            {key: 'Julie 3'},
            {key: 'Devin 4'},
            {key: 'Jackson 4'},
            {key: 'James 4'},
            {key: 'Joel 4'},
            {key: 'John 4'},
            {key: 'Jillian 4'},
            {key: 'Jimmy 4'},
            {key: 'Julie 4'},
            {key: 'Devin 5'},
            {key: 'Jackson 5'},
            {key: 'James 5'},
            {key: 'Joel 5'},
            {key: 'John 5'},
            {key: 'Jillian 5'},
            {key: 'Jimmy 5'},
            {key: 'Julie 5'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
})