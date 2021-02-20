import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SectionDivider, SectionTitle } from './Commons'
import { ColorThemeContext } from '../../contexts/ColorThemeContext'

function GoalItem({ index, children }) {
    const colorTheme = useContext(ColorThemeContext);
    const viewStyle = {
        backgroundColor: colorTheme.tileBackground,
        borderRadius: ".6rem",
        display: "flex",
        flexDirection: "row",
        padding: ".3rem",
        marginVertical: ".3rem",
    };
    const indexStyle = {
        color: colorTheme.tileText,
        fontSize: "1.1rem",
        fontWeight: "bold",
        marginHorizontal: ".3rem",
    };
    const contentStyle = {
        color: colorTheme.tileText,
        fontSize: "1.1rem",
        marginHorizontal: ".3rem",
    };
    return (
        <View style={viewStyle}>
            <Text style={indexStyle}>{index + 1}</Text>
            <Text style={contentStyle}>{children}</Text>
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