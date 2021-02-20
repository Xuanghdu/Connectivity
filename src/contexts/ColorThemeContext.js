import React from 'react';

export const colorThemes = {
    dark: {
        accent: "#FE9B56",
        background: "black",
        border: "white",
        disable: "gray",
        text: "white",
        tile: "gray",
    },
    light: {
        accent: "#FE9B56",
        background: "white",
        border: "black",
        disable: "gray",
        text: "black",
        tile: "gray",
    },
};

export const ColorThemeContext = React.createContext(colorThemes.dark);
