import React from 'react';
import { Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

//* https://reactnavigation.org/docs/en/bottom-tab-navigator.html

class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
        </View>
      );
    }
  }

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          //* Jumping between tabs
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          //* Jumping between tabs
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
});
  
const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
});

export const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsStack,
  },
  {
    //* customize options
    navigationOptions: ({ navigation }) => ({
      //* function that is given focused state and tintColor
      //* title, tabBarVisible, tabBarIcon, tabBarLabel, tabBarButtonComponent
      //* tabBarAccessibilityLabel, tabBarTestID, tabBarOnPress
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
        //* activeTintColor, activeBackgroundColor, inactiveTintColor
        //* inactiveBackgroundColor, showLabel, showIcon, style, labelStyle
        //* tabStyle, allowFontScaling
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'blue',
        },
    },
  }
);