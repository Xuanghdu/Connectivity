import React, { useContext } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SectionDivider, SectionTitle } from './Commons';
import { ColorThemeContext } from '../../contexts/ColorThemeContext';
import Grid from 'react-native-grid-component';

function PersonalGoalTile({ index, children, progress }) {
    const colorTheme = useContext(ColorThemeContext);
    const saturation = 70 - 10 * progress;
    const lightness = 65 - 35 * progress;
    const viewStyle = {
        backgroundColor: `hsl(0, ${saturation}%, ${lightness}%)`,
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
        minWidth: "1.5em",
    };
    const contentStyle = {
        color: colorTheme.tileText,
        fontSize: "1.1rem",
        marginHorizontal: ".3rem",
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
        borderRadius: ".6rem",
        flex: 1,
        margin: ".6rem",
    };
    const imageStyle = {
        borderTopLeftRadius: ".6rem",
        borderTopRightRadius: ".6rem",
        width: "100%",
        height: "10rem",
    };
    const textStyle = {
        color: colorTheme.cardText,
        fontSize: "1rem",
        margin: ".6rem",
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
    const usefulContentRenderItem = ({ id, title, imageUri }) => {
        return <UsefulContentCard title={title} imageUri={imageUri} />
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
            <Grid
                data={usefulContent}
                numColumns={4}
                renderItem={usefulContentRenderItem}
                keyExtractor={item => item.id} />
        </View>
    );
}
