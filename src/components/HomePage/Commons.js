import React from 'react';
import { Text, View } from 'react-native';
import { ColorThemeContext } from '../../contexts/ColorThemeContext'

export function SectionTitle({ children }) {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        color: colorTheme.accent,
    };
    return <Text style={style}>{children}</Text>;
}

export function SectionDivider() {
    const colorTheme = useContext(ColorThemeContext);
    const style = {
        borderColor: colorTheme.disable,
        borderWidth: 1,
    };
    return <View style={style} />
}
