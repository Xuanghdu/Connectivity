import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { ColorThemeContext } from '../../contexts/ColorThemeContext';
import { PageTitle } from '../PageTitles';

function MonthTitle({ children }) {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        color: colorTheme.text,
        fontFamily: "Lucida Console, Courier, monospace",
        fontSize: "1.2rem",
        marginVertical: ".3rem",
    };
    return <Text style={style}>{children}</Text>;
}

function CalendarDayItem({ index }) {
    const colorTheme = useContext(ColorThemeContext);
    const viewStyle = {
        borderColor: colorTheme.accent,
        borderStyle: "solid",
        borderWidth: "2px",
        height: "10rem",
    };
    const indexStyle = {
        color: colorTheme.text,
        fontSize: "1.2rem",
        fontWeight: "bold",
        left: ".3rem",
        position: "absolute",
        top: ".3rem",
    };
    return (
        <View style={viewStyle}>
            <Text style={indexStyle}>{index + 1}</Text>
        </View>
    );
}

export function CalendarPage({ days, month, year }) {
    if (true) {
        days = new Array(31).fill(0);
        month = 0;
        year = 2021;
    }

    const colorTheme = useContext(ColorThemeContext);
    const style = {
        backgroundColor: colorTheme.background,
        paddingHorizontal: "6vw",
        paddingVertical: "1rem",
    };
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthTitle = monthNames[month] + '. ' + year;
    const renderItem = ({ item, index }) => {
        return <CalendarDayItem index={index} />;
    };
    return (
        <ScrollView style={style}>
            <PageTitle>Calendar</PageTitle>
            <MonthTitle>{monthTitle}</MonthTitle>
            <FlatGrid
                itemDimension={200}
                data={days}
                renderItem={renderItem} />
        </ScrollView>
    );
}
