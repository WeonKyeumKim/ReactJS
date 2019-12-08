import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Constants, MapView, Video } from 'expo';

class CounterButton extends React.Component {
  state = {
    counter: 0,
  }

  render() {
    return (
        <TouchableOpacity 
          style={{ backgroundColor: 'white'}} 
          onPress={() => this.setState({ counter: this.state.counter + 1})}>
          <Text>
            {this.state.counter}
          </Text>
        </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  state = {
    counter: 0,
    mapRegion: {
      latitude: 20.152766, longitude: 92.867686,
      latitudeDelta: 0.0922, longitudeDelta: 0.0421
    }
  }

  _handleMapRegionChange = mapRegion => {
      this.setState({ mapRegion });
      console.log(mapRegion);
  }

  render() {
    return (
      <View style={styles.container}>
         <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
        />
        <MapView  
          style={{ alignSelf: 'stretch', height: 200}}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        />
        <View styles={{ flexDirection: 'row'}}>
          <CounterButton />
          <CounterButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
