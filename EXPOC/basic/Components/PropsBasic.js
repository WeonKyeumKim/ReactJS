import React from 'react';
import { Text, Image } from 'react-native';

export default class PropsBasic extends React.Component {
    render () {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}