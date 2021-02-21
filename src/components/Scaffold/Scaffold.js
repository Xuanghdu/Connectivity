import React, { useContext, useState } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { ColorThemeContext } from "../../contexts/ColorThemeContext";
import { HomePage } from '../HomePage/HomePage';
import { CalendarPage } from '../CalendarPage/CalendarPage';
import { Me } from '../MePage/Me';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Navigation } from 'react-native-navigation';

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
                {index === 0 ? <HomePage /> : (index === 1 ? <CalendarPage /> : <Me />)}
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

Navigation.registerComponent("HomePage", () => HomePage);
Navigation.registerComponent("CalendarPage", () => CalendarPage);
Navigation.registerComponent("MePage", () => Me);
Navigation.registerComponent("ExporePage", () => Me);

export const scaffoldRoot = {
    bottomTabs: {
        id: "BOTTOM_TABS_LAYOUT",
        children: [
            {
                stack: {
                    id: "HOME_TAB",
                    children: [
                        {
                            component: {
                                id: "HOME_PAGE",
                                name: "HomePage",
                            }
                        }
                    ],
                    options: {
                        bottomTab: {
                            icon: require('./img/icon.png'),
                        },
                    },
                },
            },
            {
                stack: {
                    id: "CALENDAR_TAB",
                    children: [
                        {
                            component: {
                                id: "CALENDAR_PAGE",
                                name: "CalendarPage",
                            }
                        }
                    ],
                    options: {
                        bottomTab: {
                            icon: require('./img/icon.png'),
                        },
                    },
                },
            },
            {
                stack: {
                    id: "ME_TAB",
                    children: [
                        {
                            component: {
                                id: "ME_PAGE",
                                name: "MePage",
                            }
                        }
                    ],
                    options: {
                        bottomTab: {
                            icon: require('./img/icon.png'),
                        },
                    },
                },
            },
            {
                stack: {
                    id: "EXPLORE_TAB",
                    children: [
                        {
                            component: {
                                id: "EXPLORE_PAGE",
                                name: "ExplorePage",
                            }
                        }
                    ],
                    options: {
                        bottomTab: {
                            icon: require('./img/icon.png'),
                        },
                    },
                },
            },
        ],
    },
};
