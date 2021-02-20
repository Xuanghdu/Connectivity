import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text,
    View, Button, TextInput,
    TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { cos } from 'react-native-reanimated';


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
        if (this.state.username === '' || this.state.password === '') {
            alert('invalid username or password')
        } else {
            const account = {
                username: this.state.username,
                password: this.state.password,
            }
            this.setState({
                username: '',
                password: ''
            })
        }
    }

    render() {

        const navigation = this.props.navigation;

        return (
            <View style={styles.container}>

                <TextInput
                    placeholder='Username'
                    returnKeyType='next'
                    style={styles.input}
                    onChangeText={(username) => this.onChangeText('username', username)}
                // onSubmitEditing={() => this.logininfo.focus()}
                />
                <TextInput
                    placeholder='Password'
                    returnKeyType='go'
                    secureTextEntry
                    style={styles.input}
                    // ref={(password) => this.logininfo = (password)}
                    onChangeText={(password) => this.onChangeText('password', password)}
                />
                {/* <View style={styles}> */}
                <Button
                    title={this.props.usage}
                    style={styles.button}
                // onPress={}
                />
                < TouchableOpacity >
                    <Text
                        style={styles.text}
                        onPress={
                            () => this.props.usage === 'Login' ?
                                navigation.navigate('Register') :
                                navigation.navigate('Login')
                        }
                    >
                        {this.props.usage === 'Login' ? 'Register' : 'Login'}
                    </Text>
                </ TouchableOpacity>
                {/* </View> */}
                <View style={styles.text}>
                    {this.state.username}
                    {this.state.password}
                </View>
            </View >

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 100,
        heigh: 100,
    },
    input: {
        height: '10%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 10,
        padding: "5%",

    },
    button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    text: {
        padding: "10px",
        fontFamily: 'Garamond',
        color: 'beige',
    },
    row: {
        flexDirection: 'row',
    }
});
