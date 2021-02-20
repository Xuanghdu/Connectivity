import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SectionDivider, SectionTitle } from './Commons'
import { ColorThemeContext } from '../../contexts/ColorThemeContext'

function GoalItem({ index, children }) {
    const colorTheme = useContext(ColorThemeContext);
    const viewStyle = {
        display: "flex",
        flexDirection: "row",
    };
    const textStyle = {
        color: colorTheme.text,
        backgroundColor: colorTheme.tile,
    };
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{index + 1}</Text>
            <Text style={textStyle}>{children}</Text>
        </View>
    );
}

export function SelfTab({ personalGoals, usefulContent }) {
    if (true) {
        personalGoals = [
            {
                id: 'a',
                content: 'goal 1',
            },
            {
                id: "b",
                content: "goal 2",
            },
            {
                id: "c",
                content: "goal 3",
            },
            {
                id: 'd',
                content: 'goal 4',
            },
            {
                id: "e",
                content: "goal 5",
            },
            {
                id: "f",
                content: "goal 6",
            },
        ];
    }

    personalGoals = personalGoals ?? [];
    const personalGoalsRenderItem = ({ item, index }) => {
        return <GoalItem index={index}>{item.content}</GoalItem>;
    };
    return (
        <View>
            <SectionTitle>Personal Goals</SectionTitle>
            <FlatList
                data={personalGoals}
                renderItem={personalGoalsRenderItem}
                keyExtractor={item => item.id} />
            <SectionDivider />
            <SectionTitle>Useful Content</SectionTitle>
        </View>
    );
}