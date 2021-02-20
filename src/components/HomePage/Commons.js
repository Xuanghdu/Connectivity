import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ColorThemeContext } from '../../contexts/ColorThemeContext'

export function SectionTitle({ children }) {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        color: colorTheme.accent,
        fontFamily: "Lucida Console, Courier, monospace",
        fontSize: "1.2rem",
        marginTop: ".3rem",
        marginBottom: ".3rem",
    };
    return <Text style={style}>{children}</Text>;
}

export function SectionDivider() {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        borderColor: colorTheme.divider,
        borderWidth: "1px",
        marginVertical: "2rem",
    };
    return <View style={style} />
}
