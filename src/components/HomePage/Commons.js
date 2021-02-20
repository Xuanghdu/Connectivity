import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ColorThemeContext } from '../../contexts/ColorThemeContext'

export function SectionTitle({ children }) {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        color: colorTheme.accent,
        // fontFamily: "Lucida Console, Courier, monospace",
        fontSize: 19.2,
        marginVertical: 4.8,
    };
    return <Text style={style}>{children}</Text>;
}

export function SectionDivider() {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        borderColor: colorTheme.divider,
        borderWidth: 1,
        marginVertical: 32,
    };
    return <View style={style} />
}
