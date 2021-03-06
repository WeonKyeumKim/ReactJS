import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Note from './Note';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }

    addNote() {
        //* alert('test');
        if (this.state.noteText) {
            var d = new Date();
            this.state.noteArray.push({
                'date': d.getFullYear() + '/' +
                       (d.getMonth() + 1) + '/' +
                       d.getDate(),
                'note': this.state.noteText,
            });
            this.setState({ noteArray: this.state.noteArray });
            this.setState({ noteText: ''});
        }
    }

    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray });
    }

    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note 
                    key={key} keyval={key} val={val} 
                    deleteMethod={() => this.deleteNote(key)}>
                    </Note>
        });

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>- NOTER -</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput  
                    onChangeText ={(noteText) => this.setState({noteText})}
                    value={this.state.noteText}
                    style={styles.textInput}
                    placeholder='>note'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent' >
                    </TextInput>
                </View>

                <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        //* don't know why need this
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 90,
        height: 90,
        //* 50 makes almost round shape corner
        //* 10 makes almost rectangular corner
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        //* don't know why need this
        elevation: 15,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    }
});
