import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const Me = (props, url) => {
    if (true)  {
        url = [];
        for (let i = 1; i < 9; ++i) {
            url[i] = '../../../img/jpg/'+i.toString()+'.jpg';
        }
    }
    const [style, setStyle] = useState(styles.postcardSmall);
    // const large = (i) => {
        const large = () => {
        // Alert.alert(i.toString);
        setStyle(styles.postcardLarge);
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
                    // source={require('../../../img/jpg/1.jpg')}
                    source={require(url[1])}
                />
            </TouchableOpacity>
            {/* <TouchableOpacity activeOpacity={.5} onPress={() => large()}>
                <Image
                    style={style}
                    source={require(url[2])}
                />
            </TouchableOpacity> */}
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