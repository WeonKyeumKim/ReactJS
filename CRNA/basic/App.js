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
import FlexAlignItems from './Components/FlexAlignItems';
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
import FlexJustifyContent from './Components/FlexJustifyContent';
import ListViewDemo from './Components/ListViewDemo';

export default class App extends React.Component {
  render() {
    return(
      /*
        BlinkApp:
          class Blink 를 사용하여 주어진 text 를 blinking 한다 
        ButtonBasic:
          4 개의 text Button 과 onPress 를 사용한다
        FetchExample:
          fetch 로 url 를 읽어서 movies.json file 을 읽어서 list 를 만든다
        FixedDimensions:
          style 를 사용하여 left top 부터 밑으로 세개의 box 를 만든다
        FlatListBasic:
          flatlist 를 사용하여 item list 를 만든다
        FlexAlignItems:
          같은 크기의 작은 box 한가운데 위에서부터 만든다
        FlexDimensions:
          flex 를 사용한 화면이 꽉차는 한배,두배,세배 크기의 box 를 만든다
        FlexDirection: flexDirection: row
          style 를 사용하여 세개의 box 를 left top 에서 오를쪽으로 
        FlexJustifyContent: 
          flexDirection: column
          justifyContent: space-between
          style 를 사용하여 세개의 box 를 left top 에사 밑으로 
          처음것과 마지막것은 코너에, 둘째것은 center 에 만든다
        ImageSource: 
          Image 로 url image 를 display
        LotsOfStyles:
          style 의 property 로 text color, size 를 change
        PropsBasic:  PropsBasic name="Weon"
          props name 의 value 를 pass 하여 display
        ScrollViewBasic:
          scrollview 를 사용하여 vertical scroll bar 를 만든다
        SectionListBasic:
          sectionlist 를 사용하여 section 있는 list 를 만든다
        TextInputTranslator:
          Textinput 을 사용하여 입력한 text 를 split, map 으로 
          blank 별로 짜른 word 를 ha 로 바꾼다
        Touchable:
          5 개의 touchable button 만든다. 가운데 꺼는 android 용이므로
          ios 에서는 작동하지 않는다.
        ListViewDemo:
          Listview 의 cloneWithRows(['row 1', 'row 2'] 를 사용해서 
          row 1 과 row 2 를 list 로 만든다.
      */
      <ListViewDemo />
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
