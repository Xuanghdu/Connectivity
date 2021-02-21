import React, { useContext, useState } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { ColorThemeContext } from "../../contexts/ColorThemeContext";
import { HomePage } from '../HomePage/HomePage';
import { CalendarPage } from '../CalendarPage/CalendarPage';
import { Me } from '../MePage/Me';
import { ExplorePage } from '../ExplorePage/ExplorePage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { UserIdContext } from '../../contexts/UserIdContext';

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
            {['home', 'calendar', 'me', 'explore'].map((title, thisIndex) => {
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

export function Scaffold({ route }) {
    const { userId } = route.params;
    const colorTheme = useContext(ColorThemeContext);
    return (
        <UserIdContext.Provider value={userId}>
            <NavigationContainer independent>
                <BottomTab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = focused ? 'ios-home' : 'ios-home-outline';
                            } else if (route.name === 'Calendar') {
                                iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
                            } else if (route.name === 'Me') {
                                iconName = focused ? 'ios-person' : 'ios-person-outline';
                            } else if (route.name === 'Explore') {
                                iconName = focused ? 'ios-search' : 'ios-search-outline';
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}

                    tabBarOptions={{
                        activeTintColor: colorTheme.accent,
                        inactiveTintColor: colorTheme.divider,
                        inactiveBackgroundColor: colorTheme.bottomBar,
                        activeBackgroundColor: colorTheme.bottomBar,
                    }}>
                    <BottomTab.Screen name="Home" children={() => <HomePage username='testing for passing username' />} />
                    <BottomTab.Screen name="Calendar" component={CalendarPage} />
                    <BottomTab.Screen name="Me" children={() => <Me username={userId} />} />
                    <BottomTab.Screen name="Explore" component={ExplorePage} />

                </BottomTab.Navigator>
            </NavigationContainer>
        </UserIdContext.Provider>
    );
}
