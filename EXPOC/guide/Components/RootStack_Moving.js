import React from 'react';
import { Button, View, Text } from 'react-native';

//* both native-navigation and react-native-navigation are libraries for
//* iOS and Android 
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

//* 1.Moving between screens
//*
//* to navigate, use this.props.navigation.push/navigate/goBack
//* to define route, use createStackNavigator function
//*
//* each scrren has own title as Text

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          // push saves current screen
          onPress={() => this.props.navigation.push('Details')}
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

//* NO built-in API
//* key: route name, value: React-native component 
//* initial route: initialRouteName
export const RootStack_Moving = createStackNavigator(
  {
    //* Home and Details are route name
    //* Home: HomeScreen,
    //* Details: DetailsScreen,
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
