import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text, Alert,
    View, Button, TextInput,
    TouchableOpacity
} from 'react-native';

import { serverRootUrl, httpGetAndHandleJSON, httpGetJSON } from '../../ServerRootUrl';

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

    submit = async () => {
        const userName = this.state.username;
        const password = this.state.password;
        if (userName === '' || password === '') {
            alert('Invalid user name or password!');
            return;
        }
        const usage = this.props.usage === 'Login' ? 'login' : 'register';
        const [success, response] = await httpGetJSON(`${serverRootUrl}/user/get/${usage}/${userName}/${password}`);
        if (!success) {
            alert('Server error! Please try again later');
            return;
        }
        if (response.success !== true) {
            alert(this.props.usage === 'Login'
                ? 'Wrong user name or password'
                : 'User name has been used, try another one');
            return;
        }
        console.log(`${this.props.usage} success! User id: ${response.userId}`);
        this.props.navigation.navigate(
            'Scaffold',
            {
                userId: response.userId,
            }
        );
    }
    random_submit = () => {
        this.props.navigation.navigate(
            'Scaffold',
            { username: "Adam", }

        );
    }

    interchange = () => {
        const navigation = this.props.navigation;
        this.props.usage === 'Login' ?
            navigation.navigate('Register') :
            navigation.navigate('Login');
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

                < TouchableOpacity
                    style={styles.appButtonContainer}
                    onPress={this.submit}
                >
                    <Text style={styles.appButtonText} >
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
                < TouchableOpacity
                    style={styles.random}
                    onPress={this.random_submit}
                >
                    <Text style={styles.text}> Go </Text>
                </TouchableOpacity>



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
    },
    random: {
        marginTop: 20,
        backgroundColor: "#ff6100",
        borderRadius: 30,
        width: 30,
        height: 30,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',

    }
});
