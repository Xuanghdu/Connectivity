import React from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { Login_forms } from './Login_forms'

export function Login_screen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.avatar_container}>
                <Image
                    style={styles.avatar}
                    source={require('../../../img/logos/connect.jpg')}
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
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 320,
        height: 180,
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