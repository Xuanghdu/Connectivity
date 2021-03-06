import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    KeyboardAvoidingView
} from 'react-native';

export class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 1000);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.avatar_container}>
                    <Image
                        style={styles.avatar}
                        source={require("../../../img/logos/logo.jpg")}
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
        margin: 10,
        padding: 10,
        // fontFamily: 'Garamond, Droid Serif, serif',
        color: 'beige',
    }
});