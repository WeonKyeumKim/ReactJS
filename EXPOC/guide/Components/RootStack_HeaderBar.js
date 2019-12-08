import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//* 3.configuring the header bar
//* define navigationOptions into createStackNavigator 
//*     headerStyle, backgroundColor, headerTintColor, headerTitleStyle, fontWeight
//*     apply to all routes
//* HomeScreen
//*     to override createStackNavigator's navigationOptions, use
//*     static navigationOptionss
//*         define headerTitle: spiro.jpg from LogoTitle
//*             can also make title inside button
//*     pass title 'anything you want here' thru otherParam to DetailsScreen
//*         format is this.props.navigation.navigate
//*     pass itemId to DetailsScreen
//*         format is this.props.navigation.navigate
//* DetailsScreen
//*     to override createStackNavigator's navigationOptions, use
//*     static navigationOptionss
//*         title: this.props.navigation.getParam
//*         headerStyle: {
//*             backgroundColor: navigationOptions.headerTintColor,
//*         },
//*         headerTintColor: navigationOptions.headerStyle.backgroundColor,
//*     get the itemId and otherParam value
//*         format is this.props.navigation.getParam
//*     display 
//*         <Text>itemId: {JSON.stringify(itemId)}</Text>
//*         <Text>otherParam: {JSON.stringify(otherParam)}</Text>


class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../Images/spiro.jpg')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
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
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    // Notice the logs ^
    // sometimes we call with the default navigationOptions and other times
    // we call this with the previous navigationOptions that were returned from
    // this very function
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
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
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })}
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

export const RootStack_HeaderBar = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
