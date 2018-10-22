import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, AlbumHeader, CardSection, Card, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: "AIzaSyBnW69idLE0paIwuyydSx97V363VN9RgVI",
                authDomain: "authentication-bc9c9.firebaseapp.com",
                databaseURL: "https://authentication-bc9c9.firebaseio.com",
                projectId: "authentication-bc9c9",
                storageBucket: "authentication-bc9c9.appspot.com",
                messagingSenderId: "896715050757"
            }
        );

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }
            else {
                this.setState({ loggedIn: false });
            }
        })
    }

    renderLoginState() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <Card>
                    <CardSection>
                        <Button onPressEvent={() => firebase.auth().signOut()}>Logout</Button>
                    </CardSection>
                </Card>);
            case false:
                return (<LoginForm />);
            default: 
            return (
                <View style={styles.spinnerAuthCheckStyle}>
                    <Spinner spinnerSize="large" />
                </View>
            );
        }
    }

    render() {
        return (
            <View>
                <AlbumHeader headerText='Authentication' />
                {this.renderLoginState()}
            </View>
        )
    }
}

const styles = {
    spinnerAuthCheckStyle: {
        justifyContent : 'space-around',
        backgroundColor : '#fff',
        height: 200,
        padding : 5,
        flexDirection : 'column',
        position : 'relative'
    }
}

export default App;