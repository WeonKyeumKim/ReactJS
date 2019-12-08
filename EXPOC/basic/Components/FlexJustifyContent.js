import React from 'react';
import { Text, View } from 'react-native';

export default class FlexJustifyContent extends React.Component {
  
    render() {
        return (
            // Try setting `justifyContent` to `center`.
            // Try setting `flexDirection` to `row`.
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}