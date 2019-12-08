import React from "react";
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from "react-native";

//* add
import { connect } from 'react-redux';
//* import actions 
import { counterIncrement, counterDecrement, counterClear, counterSet } from './actions';

//* export default class App extends React.Component {
class App extends React.Component {
  constructor(props) {
    super(props);
    /* remove all realated to state 
    this.state = {
      count: 0
    };
    this.onPressIncrement = this.onPressIncrement.bind(this);
    this.onPressDecrement = this.onPressDecrement.bind(this);
    this.onPressClear = this.onPressClear.bind(this);
    */
    this.onChangeText = this.onChangeText.bind(this);
  }

  /* remove all related to state
  onPressIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  onPressDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  onPressClear() {
    this.setState({ count: 0 });
  }
  */

  onChangeText(number) {
    const count = parseInt(number);
    {/* use this.props.counterSet instead of this.setState({ count })
      this.setState({count});
    */}
    this.props.counterSet(count);
  }

  render() {
    //* add
    console.log(this.props);

    const { container, countViewStyle, welcome } = styles;
    return (
      <View style={container}>
      {/*
        use this.props.count.toString()} instead of
            this.state.count.toString()
            value={this.state.count.toString()}
      */}
          <TextInput          
            style={{width: 40, height: 40, borderWidth: 1}}
            onChangeText={this.onChangeText}
            value={this.props.count.toString()}
           />
        <View style={countViewStyle}> 
          {/* use redux action instead of function for state
              <Button onPress={this.onPressIncrement} title="+" />
          */}
          <Button onPress={this.props.counterIncrement} title="+" />
          <Text style={welcome}>
            {/* 
            {this.state.count}
            use props instead of state
            */}
            {this.props.count}
          </Text>
          {/* user redux action instead of function for state
              <Button onPress={this.onPressDecrement} title="-" />
          */}
          <Button onPress={this.props.counterDecrement} title="-" />
        </View>
        {/*
            <Button onPress={this.onPressClear} title="Clear" />
        */}
        <Button onPress={this.props.counterClear} title="Clear" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  countViewStyle: {
    flexDirection: "row"
  }
});

//* add
//* map state.count to props.count
function mapStateToProps(state) {
  return {
    count: state
  }
}

//* add mapStateToProps, actions
//* App is react component connect to store
//* no action
//* export default connect(mapStateToProps, null)(App);

//* hook up action counterIncrement, counterDecrement, counterClear, counterSet
export default connect(mapStateToProps, { counterIncrement, counterDecrement, counterClear, counterSet })(App);