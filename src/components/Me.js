import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export const Me = (props) => {
    return (
        <View style={styles.top}>
            <Text style={styles.header}>Personal Profile</Text>
            <View style={styles.row}>
                <View style={styles.container}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.field}>Username: {props.username}</Text>
                    <Text style={styles.field}>Name: {props.name}</Text>
                    <Text style={styles.field}>Date of Birth: {props.dob}</Text>
                    <Text style={styles.field}>Gender: {props.gender}</Text>
                    <Text style={styles.field}>Country/Region: {props.nat}</Text>
                    <Text style={styles.field}>Contact: {props.contact}</Text>
                </View>
            </View>
            <Text style={styles.header}>Set A New Goal</Text>
            <Text style={styles.text}>Describe your new goal here:</Text>
            <Text style={styles.text}>Do you want to invite others?</Text>
            <Button
                onPress={SetGoal}
                title="Set Your Goal"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text style={styles.header}>Achievements</Text>
            <TouchableOpacity activeOpacity={.5} onPress={callFun}>
                <Image
                    style={styles.postcardSmall}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

const SetGoal = () => { }

function callFun() {
    return (
        <View>
            <Image
                style={styles.postcardBig}
                source={{
                    uri: 'https://reactnative.dev/img/header_logo.svg',
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: "black",
        padding: 20,
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
    },
    header: {
        color: 'chocolate',
        fontWeight: 'bold',
        fontSize: 19.2,
    },
    container: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
    },
    postcardSmall: {
        width: 160,
        height: 90,
    },
    postcardBig: {
        width: 320,
        height: 180,
    },
    field: {
        // fontFamily: 'Garamond, Droid Serif, serif',
        color: 'beige',
    },
    text: {
        margin: 10,
        padding: 10,
        // fontFamily: 'Garamond, Droid Serif, serif',
        color: 'beige',
    }
});