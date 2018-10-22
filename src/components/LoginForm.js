import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native'
import { Button, Card, CardSection, TextInputBar, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({error : '', loading: true})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(this.onLoginFailure.bind(this))
        })
    }

    renderButtonOrSpinner() {
        if(this.state.loading){
            return (<Spinner spinnerSize="small" />);
        }
        return (<Button onPressEvent={this.onButtonPress.bind(this)}>Log In</Button>);
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }

    onLoginFailure() {
        this.setState({error : 'Authentication Failed', loading: false})
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInputBar
                        placeholder="user@email.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <TextInputBar
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButtonOrSpinner()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle : {
        fontSize : 22,
        color : '#000'
    }
}

export default LoginForm;