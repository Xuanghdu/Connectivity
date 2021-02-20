import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import { Login_forms } from './Login_forms'

export class Splash extends React.Component {
    render() {
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
        justifyContent: 'center',
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
        padding: 10,
        fontFamily: 'Garamond',
        color: 'beige',
    }
});