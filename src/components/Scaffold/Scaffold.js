import React, { useContext, useState } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { ColorThemeContext } from "../../contexts/ColorThemeContext";
import { HomePage } from '../HomePage/HomePage';
import { CalendarPage } from '../CalendarPage/CalendarPage';
import { Me } from '../MePage/Me';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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

const BottomTab = createBottomTabNavigator();

export function Scaffold(props) {
    const colorTheme = useContext(ColorThemeContext);
    return (
        <NavigationContainer independent>
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: colorTheme.accent,
                    inactiveTintColor: colorTheme.divider,
                }}>
                <BottomTab.Screen name="Home" component={HomePage} />
                <BottomTab.Screen name="Calendar" component={CalendarPage} />
                <BottomTab.Screen name="Me" component={Me} />
                <BottomTab.Screen name="Explore" component={Me} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}
