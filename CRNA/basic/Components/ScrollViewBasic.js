import React from 'react';
import { ScrollView, Text, Image } from 'react-native';

export default class ScrollViewBasic extends React.Component {
    render () {
        return (
            <ScrollView>
                <Text style={{fontSize:15}}>Scroll me plz</Text>
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Text style={{fontSize:15}}>If you like</Text>
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Text style={{fontSize:15}}>Scrolling down</Text>
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Text style={{fontSize:15}}>What's the best</Text>
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Text style={{fontSize:15}}>Framework around?</Text>
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Text style={{fontSize:15}}>React Native</Text>
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
                <Image source={require('../Images/favicon.png')} />
            </ScrollView>
        );
    }
}