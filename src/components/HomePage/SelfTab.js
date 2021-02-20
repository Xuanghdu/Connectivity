import React, { useContext } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SectionDivider, SectionTitle } from './Commons';
import { ColorThemeContext } from '../../contexts/ColorThemeContext';
import { FlatGrid } from 'react-native-super-grid';

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

function UsefulContentCard({ title, imageUri }) {
    const colorTheme = useContext(ColorThemeContext);
    const viewStyle = {
        backgroundColor: `hsl(${Math.random() * 360}, 50%, 50%)`,
        borderRadius: 9.6,
        margin: 9.6,
    };
    const imageStyle = {
        borderTopLeftRadius: 9.6,
        borderTopRightRadius: 9.6,
        width: "100%",
        height: 160,
    };
    const textStyle = {
        color: colorTheme.cardText,
        fontSize: 16,
        margin: 9.6,
    };
    return (
        <View style={viewStyle}>
            <Image style={imageStyle} source={{ uri: imageUri }} />
            <Text style={textStyle}>{title}</Text>
        </View>
    );
}

export function SelfTab({ personalGoals, usefulContent }) {
    if (true) {
        personalGoals = [];
        for (let i = 0; i < 12; ++i)
            personalGoals.push({
                id: i.toString(),
                content: 'goal ' + (i + 1),
            });
    }

    if (true) {
        usefulContent = [];
        for (let i = 0; i < 19; ++i)
            usefulContent.push({
                id: i.toString(),
                title: "Bla bla bla " + i,
                imageUri: "https://reactnative.dev/img/tiny_logo.png",
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
    const usefulContentRenderItem = ({ item }) => {
        return <UsefulContentCard title={item.title} imageUri={item.imageUri} />
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
            <FlatGrid
                itemDimension={200}
                data={usefulContent}
                renderItem={usefulContentRenderItem}
                keyExtractor={item => item.id} />
        </View>
    );
}
