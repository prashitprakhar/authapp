import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, AlbumHeader } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp(
            {
                apiKey: "AIzaSyBnW69idLE0paIwuyydSx97V363VN9RgVI",
                authDomain: "authentication-bc9c9.firebaseapp.com",
                databaseURL: "https://authentication-bc9c9.firebaseio.com",
                projectId: "authentication-bc9c9",
                storageBucket: "authentication-bc9c9.appspot.com",
                messagingSenderId: "896715050757"
              }
        )
    }
    render() {
        return (
            <View>
                <AlbumHeader headerText='Authentication' />
                <LoginForm />
            </View>
        )
    }
}

export default App;