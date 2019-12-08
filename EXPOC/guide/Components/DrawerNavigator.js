import React from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json

class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../Images/chats-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
}


class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../Images/notif-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
}


const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
});


export const DrawerNavigator = createDrawerNavigator(
  {
    Home: MyHomeScreen,
    Notifications: MyNotificationsScreen,
  }
);