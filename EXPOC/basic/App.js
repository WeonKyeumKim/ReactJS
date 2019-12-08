import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, Platform,
        TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
        ScrollView
        } from 'react-native';

import BlinkApp from './Components/BlinkApp';
import ButtonBasic from './Components/ButtonBasic';
import FetchExample from './Components/FetchExample';
import FixedDimensions from './Components/FixedDimensions';
import FlatListBasic from './Components/FlatListBasic';
import FlexDimensions from './Components/FlexDimensions';
import FlexDirection from './Components/FlexDirection';
import FlexJustity from './Components/FlexJustifyContent';
import ImageSource from './Components/ImageSource';
import LotsOfStyles from './Components/LotsOfStyles';
import PropsBasic from './Components/PropsBasic';
import ScrollViewBasic from './Components/ScrollViewBasic';
import SectionListBasic from './Components/SectionListBasic';
import TextInputTranslator from './Components/TextInputTranslator';
import Touchable from './Components/Touchable';

export default class App extends React.Component {
  render() {
    return(
      <BlinkApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
