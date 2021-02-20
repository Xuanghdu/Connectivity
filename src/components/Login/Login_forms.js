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
            this.props.navigation.navigate('HomePage');
        }
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

                <Button
                    title={this.props.usage === 'Login' ? 'Register' : 'Login'}
                    color='#121212'
                    onPress={this.interchange}
                />
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
        height: 100,
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
    empty_button: {
        elevation: 8,
        backgroundColor: "#12112",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
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
