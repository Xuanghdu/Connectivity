import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const Me = (props) => {
    const [url, setUrl] = useState('https://reactnative.dev/img/tiny_logo.png');
    const [style, setStyle] = useState(styles.postcardSmall);
    const large = () => {
        setUrl('https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F042d50d2-3686-4d79-91bf-9489df4a4ed1%2Flogo.jpg?table=block&id=220c701d-1403-4944-b303-ff6e4b3e9678&width=250&userId=&cache=v2');
        setStyle(styles.postcardLarge)
    }
    const GoalInput = () => {
        const [value, onChangeText] = React.useState('');
        return (
            <TextInput
                style={{
                    height: 40, borderColor: 'gray', borderWidth: 1,
                    fontSize: 14,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    marginBottom: 10,
                    padding: "1%",
                }}
                placeholder='My Grand New Goal'
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        );
    }
    const [selectedValue, setSelectedValue] = useState("No. Leave me alone.");
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
            <GoalInput></GoalInput>
            <Text style={styles.text}>Do you want to invite others?</Text>
            <Picker
                selectedValue={selectedValue}
                style={{
                    height: 40,
                    fontSize: 14,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    marginBottom: 10
                }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="No. Leave me alone." value="0" />
                <Picker.Item label="Sure Yes! I want to invite my friends!" value="1" />
                <Picker.Item label="Sure Yes! Make it public!" value="2" />
            </Picker>
            <Button
                onPress={SetGoal}
                title="Set Your Goal"
                color="#841584"
            />
            <Text style={styles.header}>Achievements</Text>
            <TouchableOpacity activeOpacity={.5} onPress={() => large()}>
                <Image
                    style={style}
                    source={{
                        uri: url,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

const SetGoal = () => { }

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
    postcardLarge: {
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