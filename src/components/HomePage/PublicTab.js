import React, { useContext, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SectionDivider, SectionTitle } from './Commons';
import { ColorThemeContext } from '../../contexts/ColorThemeContext';

function PersonalGoalTile({ index, children, progress }) {
    const colorTheme = useContext(ColorThemeContext);
    const saturation = 70 - 10 * progress;
    const lightness = 65 - 35 * progress;
    const viewStyle = {
        backgroundColor: `hsl(0, ${saturation}%, ${lightness}%)`,
        borderRadius: 9.6,
        display: "flex",
        flexDirection: "row",
        padding: 4.8,
        marginVertical: 4.8,
    };
    const indexStyle = {
        color: colorTheme.tileText,
        fontSize: 17.6,
        fontWeight: "bold",
        marginHorizontal: 4.8,
        minWidth: 24,
    };
    const contentStyle = {
        color: colorTheme.tileText,
        fontSize: 17.6,
        marginHorizontal: 4.8,
    };
    return (
        <View style={viewStyle}>
            <Text style={indexStyle}>{index + 1 + "."}</Text>
            <Text style={contentStyle}>{children}</Text>
        </View>
    );
}

export function PublicTab({ personalGoals }) {
    if (true) {
        personalGoals = [];
        for (let i = 0; i < 12; ++i)
            personalGoals.push({
                id: i.toString(),
                content: 'goal ' + (i + 1),
            });
    }

    const personalGoalsRenderItem = ({ item, index }) => {
        const progress = index / (personalGoals.length - 1);
        return (
            <PersonalGoalTile index={index} progress={progress}>
                {item.content}
            </PersonalGoalTile>
        );
    };

    return (
        <View>
            <SectionTitle>Goals available to you from the public</SectionTitle>
            <FlatList
                data={personalGoals}
                renderItem={personalGoalsRenderItem}
                keyExtractor={item => item.id} />
        </View>
    );
}
