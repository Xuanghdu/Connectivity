import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

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
                    <Text style={styles.field}>USERNAME: {props.username}</Text>
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
        </View>
    );
}

const SetGoal = () => {}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#121212',
    },
    row: {
        flexDirection: "row",
    },
    header: {
        color: 'chocolate',
        fontWeight: 'bold',
    },
    container: {
        margin: '10px',
        flex: 1,
        alignItems: 'left',
        justifyContent: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
    },
    field: {
        fontFamily: 'Garamond',
        color: 'beige',
    },
    text: {
        margin: "10px",
        padding: "10px",
        fontFamily: 'Garamond',
        color: 'beige',
    }
});