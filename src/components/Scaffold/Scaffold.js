import React, { useContext, useState } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { ColorThemeContext } from "../../contexts/ColorThemeContext";
import { HomePage } from '../HomePage/HomePage';
import { CalendarPage } from '../CalendarPage/CalendarPage';
import { Me } from '../Me';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

function BottomNavigationItem({ selected, onPress, children }) {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        color: selected ? colorTheme.accent : colorTheme.text,
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
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {index === 0 ? <HomePage /> : <CalendarPage />}
            </View>
            <View>
                <BottomNavigationBar index={index} setIndex={setIndex} />
            </View>
        </View>
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        height: vh(100),
        backgroundColor: "black",
    },
    contentContainer: {
        flex: 1
    }
});
