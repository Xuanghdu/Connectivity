import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text,
    View, Button, TextInput,
    TouchableOpacity
} from 'react-native';

import { serverRootUrl } from '../../ServerRootUrl';

export class Login_forms extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }

    }
    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    }

    submit = () => {
        const userName = this.state.username;
        const password = this.state.password;
        if (this.props.usage === 'Register') {

        } else {
            if (userName === '' || password === '') {
                alert('Invalid user name or password!');
                return;
            }

            const request = new XMLHttpRequest();
            request.open("GET", `${serverRootUrl}/user/get/login/${userName}/${password}`, true);

            request.onreadystatechange = () => {
                console.log(request.readyState);
                if (request.readyState === XMLHttpRequest.DONE) {
                    const status = request.status;
                    if (status === 0 || (status >= 200 && status < 400)) {
                        const response = JSON.parse(request.responseText);
                        if (response.success === true && response.userId) {
                            console.log('login success');
                            this.props.navigation.navigate(
                                'Scaffold',
                                {
                                    userId: response.userId,
                                }
                            );
                        } else {
                            alert('Invalid user name or password!');
                        }
                    } else {
                        alert('Server error! Please try again later.');
                    }
                }

            }

        }

        request.send();
    }

    interchange = () => {
        const navigation = this.props.navigation;
        this.props.usage === 'Login' ?
            navigation.navigate('Register') :
            navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    placeholder='Username'
                    returnKeyType='next'
                    style={styles.input}
                    onChangeText={(username) => this.onChangeText('username', username)}
                />
                <TextInput
                    placeholder='Password'
                    returnKeyType='go'
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(password) => this.onChangeText('password', password)}
                />
                <Button
                    title={this.props.usage}
                    onPress={this.submit}
                />
                < TouchableOpacity >
                    <Text
                        style={styles.text}
                        onPress={this.interchange}
                    >
                        {this.props.usage === 'Login' ? 'Register' : 'Login'}
                    </Text>
                </ TouchableOpacity>
                <View style={styles.container}>
                    <Text>
                        {this.state.username}
                        {this.state.password}
                    </Text>
                </View>

            </View >

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 100,
        height: 100,
    },
    input: {
        height: 30,
        fontSize: 14,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 10,
        padding: "1%",

    },
    text: {
        padding: 10,
        // fontFamily: 'Garamond, Droid Serif, serif',
        color: 'beige',
    },
    row: {
        flexDirection: 'row',
    }
});
