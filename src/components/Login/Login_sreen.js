import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import { Login_forms } from './Login_forms'

export function Login_screen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.avatar_container}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </View>
            <View style={styles.form_container}>
                <Login_forms usage='Login' navigation={navigation} />
            </View>
        </View>
    );

}


const styles = StyleSheet.create({

    header: {
        color: 'chocolate',
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: '#121212',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
    },
    avatar_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        margin: 10,
        padding: 10,
        // fontFamily: 'Garamond, Droid Serif, serif',
        color: 'beige',
    }
});