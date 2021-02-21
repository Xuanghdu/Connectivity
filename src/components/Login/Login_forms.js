import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text,
    View, Button, TextInput,
    TouchableOpacity
} from 'react-native';

import { serverRootUrl, httpGetAndHandleJSON } from '../../ServerRootUrl';

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
        if (userName === '' || password === '') {
            alert('Invalid user name or password!');
            return;
        }
        httpGetAndHandleJSON(
            `${serverRootUrl}/user/get/login/${userName}/${password}`,
            (response) => {
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
            },
            'Server error! Please try again later'
        );
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

                < TouchableOpacity style={styles.appButtonContainer} >
                    <Text
                        style={styles.appButtonText}
                        onPress={this.submit}>
                        {this.props.usage}
                    </Text>
                </TouchableOpacity>
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
        width: 210,
        height: 100,
    },
    input: {
        width: 200,
        height: 30,
        fontSize: 14,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 10,
        padding: 5,

    },
    appButtonContainer: {
        // elevation: 8,
        // paddingTop:10,
        backgroundColor: "#ff6100",
        borderRadius: 10,
        width: 200,
        height: 30,
        alignSelf: "center",
        justifyContent: 'center',
        marginBottom: 10,

        // paddingVertical: 10,
        // paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        justifyContent: 'center',
        textTransform: "uppercase",
    },

    text: {
        // padding: 5,
        fontSize: 12,
        color: 'beige',
    },
    row: {
        flexDirection: 'row',
    }
});
