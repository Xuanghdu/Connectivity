import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ColorThemeContext } from '../contexts/ColorThemeContext';

export function PageTitle({ children }) {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        color: colorTheme.accent,
        fontFamily: "Verdana, Arial, Helvetica, sans-serif",
        fontSize: "1.4rem",
        fontWeight: "bold",
        marginVertical: ".5rem",
    };
    return <Text style={style}>{children}</Text>;
}
