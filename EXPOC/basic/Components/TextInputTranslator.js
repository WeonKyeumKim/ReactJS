import React from 'react';
import { Text, View, TextInput } from 'react-native';

export default class TextInputTranslator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && 'ha').join(' ')}
                </Text>
            </View>
        );
    }
}