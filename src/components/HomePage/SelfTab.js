import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Image, Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { SectionDivider, SectionTitle } from './Commons';
import { ColorThemeContext } from '../../contexts/ColorThemeContext';
import { Picker } from '@react-native-picker/picker';
import { UserIdContext } from '../../contexts/UserIdContext';
import { serverRootUrl, httpGetAndHandleJSON, httpGetJSON } from '../../ServerRootUrl';
import { PersonalGoalTile } from './PersonalGoalTile'


export function SelfTab() {
    const userId = useContext(UserIdContext);
    const [personalGoals, setPersonalGoals] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const [_, goalIds] = await httpGetJSON(`${serverRootUrl}/goal/get/self/${userId}`);
            const goals = [];
            for (let goalId of goalIds) {
                const [_, detail] = await httpGetJSON(`${serverRootUrl}/goal/get/detail/${goalId}`);
                goals.push({
                    id: goalId,
                    content: detail.text,
                });
                console.log(goals);
            }
            setPersonalGoals(goals);
        }
        fetchData();
    }, []);

    const personalGoalsRenderItem = ({ item, index }) => {
        const progress = index / (personalGoals.length - 1);
        return (
            <PersonalGoalTile index={index} progress={progress}>
                {item.content}
            </PersonalGoalTile>
        );
    };

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
        <View>
            <SectionTitle>Personal Goals</SectionTitle>
            <FlatList
                data={personalGoals}
                renderItem={personalGoalsRenderItem}
                keyExtractor={item => item.id} />
            <Text style={styles.header}>Set A New Goal</Text>
            <Text style={styles.text}>Describe your new goal here:</Text>
            <GoalInput />
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
                onPress={SetGoal()}
                title="Set Your Goal"
                color="#841584"
            />
        </View>
    );
}

const SetGoal = (value) => {
    // return (
    // personalGoals.push(value);
    // );
}

const styles = StyleSheet.create({
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
    text: {
        margin: 10,
        padding: 10,
        // fontFamily: 'Garamond, Droid Serif, serif',
        color: 'beige',
    }
});
