import React from 'react';

export const colorThemes = {
    dark: {
        accent: "#FE9B56",
        background: "black",
        cardBackground: "#8993FD",
        cardText: "white",
        divider: "gray",
        text: "white",
        tileBackground: "#FE5B5B",
        tileBar: "gray",
        tileText: "black",
        titleBorder: "black",
        titleText: "black",
    },
    light: {
        accent: "#FE9B56",
        background: "white",
        cardBackground: "#8993FD",
        cardText: "black",
        divider: "gray",
        text: "black",
        tileBackground: "#FE5B5B",
        tileBar: "gray",
        tileText: "black",
        titleBorder: "black",
        titleText: "black",
    },
};

export const ColorThemeContext = React.createContext(colorThemes.dark);
