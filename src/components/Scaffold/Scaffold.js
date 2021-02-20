import React, { useContext, useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { ColorThemeContext } from "../../contexts/ColorThemeContext";
import { HomePage } from '../HomePage/HomePage';
import { CalendarPage } from '../CalendarPage/CalendarPage';

function BottomNavigationItem({ selected, onPress, children }) {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        color: selected ? colorTheme.accent : colorTheme.text,
    };
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Text style={style}>
                {children}
            </Text>
        </TouchableWithoutFeedback>
    );
}

function BottomNavigationBar({ index, setIndex }) {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        backgroundColor: colorTheme.divider,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    };
    return (
        <View style={style}>
            {['home', 'calendar', 'me', 'expore'].map((title, thisIndex) => {
                return (
                    <BottomNavigationItem
                        key={title}
                        onPress={() => setIndex(thisIndex)}
                        selected={index === thisIndex}>
                        {title}
                    </BottomNavigationItem>
                );
            })}
        </View>
    );
}

export function Scaffold(props) {
    const [index, setIndex] = useState(0);
    return (
        <View>
            {index === 0 ? <HomePage /> : <CalendarPage />}
            <BottomNavigationBar index={index} setIndex={setIndex} />
        </View>
    );
}
