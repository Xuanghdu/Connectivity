import React, { useContext, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SectionDivider, SectionTitle } from './Commons';
import { ColorThemeContext } from '../../contexts/ColorThemeContext';
import { FlatGrid } from 'react-native-super-grid';

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

export function PublicTab(usefulContent) {

    if (true) {
        usefulContent = [];
        for (let i = 0; i < 19; ++i)
            usefulContent.push({
                id: i.toString(),
                title: "Bla bla bla " + i,
                imageUri: "https://reactnative.dev/img/tiny_logo.png",
            });
    }
    const usefulContentRenderItem = ({ item }) => {
        return <UsefulContentCard title={item.title} imageUri={item.imageUri} />
    };
    return (
        <View>
            <SectionTitle>Userful Contents from public</SectionTitle>
            <FlatGrid
                itemDimension={100}
                data={usefulContent}
                renderItem={usefulContentRenderItem}
                keyExtractor={item => item.id} />
        </View>
    );
}
