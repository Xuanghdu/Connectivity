import React, { useContext, useState } from "react";
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { ColorThemeContext } from "../../contexts/ColorThemeContext";
import { SelfTab } from './SelfTab'
import { FriendsTab } from './FriendsTab';
import { PublicTab } from './PublicTab';

function TopNavigationItem({ selected, onPress, children }) {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        borderColor: selected ? colorTheme.titleBorder : "transparent",
        borderStyle: "solid",
        borderWidth: 2,
        color: colorTheme.titleText,
        // fontFamily: "Times, Times New Roman, Georgia, serif",
        fontSize: 19.2,
        padding: 4.8,
    };
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Text style={style}>
                {children}
            </Text>
        </TouchableWithoutFeedback>
    );
}

function TopNavigationBar({ index, setIndex }) {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        backgroundColor: colorTheme.accent,
        borderRadius: 9.6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16,
        paddingHorizontal: 25.6,
        paddingVertical: 4.8,
    };
    return (
        <View style={style}>
            {['SELF', 'FRIENDS', 'PUBLIC'].map((title, thisIndex) => {
                return (
                    <TopNavigationItem
                        key={title}
                        onPress={() => setIndex(thisIndex)}
                        selected={index === thisIndex}>
                        {title}
                    </TopNavigationItem>
                );
            })}
        </View>
    );
}

export function HomePage(props) {
    const [index, setIndex] = useState(0);
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        backgroundColor: colorTheme.background,
        paddingHorizontal: "6%",
        paddingVertical: 16,
    };
    return (
        <View style={style}>
            <TopNavigationBar index={index} setIndex={setIndex} />
            <ScrollView>
                {index == 0 ? <SelfTab /> : index == 1 ? <FriendsTab /> : <PublicTab />}
            </ScrollView>
        </View>
    );
}
