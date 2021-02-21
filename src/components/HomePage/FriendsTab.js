import React, { useContext, useState } from 'react';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { SectionDivider, SectionTitle } from './Commons';
import { ColorThemeContext } from '../../contexts/ColorThemeContext';
import { TextInput } from 'react-native-gesture-handler';
import { PersonalGoalTile } from './PersonalGoalTile'

export function FriendsTab({ personalGoals }) {
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
            <SectionTitle>Goals from your friends</SectionTitle>
            <FlatList
                data={personalGoals}
                renderItem={personalGoalsRenderItem}
                keyExtractor={item => item.id} />
        </View>
    );
}