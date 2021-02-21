import React, { useContext, useState } from 'react';
import { FlatList, Image, Alert, Text, View, TouchableOpacity } from 'react-native';
import { SectionDivider, SectionTitle } from './Commons';
import { ColorThemeContext } from '../../contexts/ColorThemeContext';
import { TextInput } from 'react-native-gesture-handler';

export function PersonalGoalTile({ index, children, progress }) {
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


    if (progress < 100) {
        return (

            <TouchableOpacity onPress={() => Alert.alert('', 'Goal on progress: ' + '0%')} >
                <View style={viewStyle}>
                    <Text style={indexStyle}>{index + 1 + "."}</Text>
                    <Text style={contentStyle}>{children}</Text>
                </View>
            </ TouchableOpacity>
        );
    } else {
        return (<View></View>)
    }
}
