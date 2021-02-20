import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ColorThemeContext } from '../contexts/ColorThemeContext';

export function PageTitle({ children }) {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        color: colorTheme.accent,
        // fontFamily: "Verdana, Arial, Helvetica, sans-serif",
        fontSize: 22.5,
        fontWeight: "bold",
        marginVertical: 8,
    };
    return <Text style={style}>{children}</Text>;
}
