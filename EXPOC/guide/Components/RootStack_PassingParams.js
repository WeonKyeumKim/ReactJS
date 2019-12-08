import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//* 2.Passing parameters to routes
//*
//* to pass params from Home to Details, use
//* optional second parm into this.props.navigation.navigate
//*     format is keyId1: value1, keyId2: value2
//* to get params value into Details, use
//* this.props.navigation.getParam
//*     format is keyId and defaultValue
//* store the values into const itemId and otherParam
//* display the const value
//*     format {JSON.stringify(itemId)}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            //* pass param to Detail route
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    //* get param value by key from HomeScreen
    //* this.props.navigation.getParam(paramName, defaultValue)
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            //* pass param to Detail route itself
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export const RootStack_PassingParams = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
