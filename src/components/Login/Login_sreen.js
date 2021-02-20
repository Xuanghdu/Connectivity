import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import { Login_forms } from './Login_forms'

export class Login_screen extends React.Component {
    constructor() {
        super()
        this.state = {
            input_value: '',
        }
    }

    input_change(input_value) {
        this.setState({ input_value: input_value })
    }

    render() {
        const { input_value } = this.state

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.avatar_container}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
                <View style={styles.form_container}>
                    <Login_forms
                        input_value={input_value}
                        input_change={(text) => this.input_change(text)} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({

    header: {
        color: 'chocolate',
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: '#121212',
        margin: '10px',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'bottom',
    },
    avatar: {
        width: 100,
        height: 100,
    },
    avatar_container: {
        flex: 0.5,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form_container: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        margin: "10px",
        padding: "10px",
        fontFamily: 'Garamond',
        color: 'beige',
    }
});