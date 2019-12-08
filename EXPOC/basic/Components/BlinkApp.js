import React from 'react';
import { Text, View } from 'react-native';

class Blink extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isShowingText: true};
  
      // Toggle the state every second
      // and re-render its component Blink
      setInterval(() => {
        this.setState(previousState => {
          return { isShowingText: !previousState.isShowingText };
        });
      }, 1000);
    }
  
    render() {
      let display = this.state.isShowingText ? this.props.text : ' ';
      return (
        <Text>{display}</Text>
      );
    }
}

export default class BlinkApp extends React.Component {
  render() {
    return (
      <View>
        <Blink text="I Love to blink" />
        <Blink text="Yes blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me" />
      </View>
    );
  }
}