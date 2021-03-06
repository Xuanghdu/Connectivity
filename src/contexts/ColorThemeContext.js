import React from 'react';

// TODO: card and tile colors are currently randomly generated
//       use theme colors instead

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
        bottomBar: "#222222",
    },
    light: {
        accent: "#FE9B56",
        background: "white",
        cardBackground: "#8993FD",
        cardText: "black",
        divider: "gray",
        text: "black",
        tileBackground: "#DDDDDD",
        tileBar: "gray",
        tileText: "black",
        titleBorder: "black",
        titleText: "black",
        bottomBar: "gray",
    },
};

export const ColorThemeContext = React.createContext(colorThemes.dark);
