import React, { useContext, useState } from 'react';
import { FlatList, Image, Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { SectionDivider, SectionTitle } from './Commons';
import { ColorThemeContext } from '../../contexts/ColorThemeContext';
import { Picker } from '@react-native-picker/picker';
import { FlatGrid } from 'react-native-super-grid';

function PersonalGoalTile({ index, children, progress }) {
    const colorTheme = useContext(ColorThemeContext);
    const saturation = 70 - 10 * progress;
    const lightness = 65 - 35 * progress;
    const viewStyle = {
        backgroundColor: `hsl(0, ${saturation}%, ${lightness}%)`,
        borderRadius: 9.6,
        display: "flex",
        flexDirection: "row",
        padding: 4.8,
        marginVertical: 4.8,
    };
    const indexStyle = {
        color: colorTheme.tileText,
        fontSize: 17.6,
        fontWeight: "bold",
        marginHorizontal: 4.8,
        minWidth: 24,
    };
    const contentStyle = {
        color: colorTheme.tileText,
        fontSize: 17.6,
        marginHorizontal: 4.8,
    };
    return (
        <View style={viewStyle}>
            <Text style={indexStyle}>{index + 1 + "."}</Text>
            <Text style={contentStyle}>{children}</Text>
        </View>
    );
}

function UsefulContentCard({ title, imageUri }) {
    const colorTheme = useContext(ColorThemeContext);
    const viewStyle = {
        backgroundColor: `hsl(${Math.random() * 360}, 50%, 50%)`,
        borderRadius: 9.6,
        margin: 9.6,
    };
    const imageStyle = {
        borderTopLeftRadius: 9.6,
        borderTopRightRadius: 9.6,
        width: "100%",
        height: 160,
    };
    const textStyle = {
        color: colorTheme.cardText,
        fontSize: 16,
        margin: 9.6,
    };
    return (
        <View style={viewStyle}>
            <Image style={imageStyle} source={{ uri: imageUri }} />
            <Text style={textStyle}>{title}</Text>
        </View>
    );
}

export function SelfTab({ personalGoals, usefulContent }) {
// export function SelfTab({ personalGoals }) {
    if (true) {
        personalGoals = [];
        for (let i = 0; i < 6; ++i)
            personalGoals.push({
                id: i.toString(),
                content: 'goal ' + (i + 1),
            });
    }

    if (true) {
        usefulContent = [];
        for (let i = 0; i < 19; ++i)
            usefulContent.push({
                id: i.toString(),
                title: "Bla bla bla " + i,
                imageUri: "https://reactnative.dev/img/tiny_logo.png",
            });
    }

    const personalGoalsRenderItem = ({ item, index }) => {
        const progress = index / (personalGoals.length - 1);
        return (
            <PersonalGoalTile index={index} progress={progress}>
                {item.content}
            </PersonalGoalTile>
        );
    };
    const usefulContentRenderItem = ({ item }) => {
        return <UsefulContentCard title={item.title} imageUri={item.imageUri} />
    };
    const GoalInput = () => {
        const [value, onChangeText] = React.useState('');
        return (
            <TextInput
                style={{
                    height: 40, borderColor: 'gray', borderWidth: 1,
                    fontSize: 14,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    marginBottom: 10,
                    padding: "1%",
                }}
                placeholder='My Grand New Goal'
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        );
    }
    const [selectedValue, setSelectedValue] = useState("No. Leave me alone.");
    return (
        <View>
            <SectionTitle>Personal Goals</SectionTitle>
            <FlatList
                data={personalGoals}
                renderItem={personalGoalsRenderItem}
                keyExtractor={item => item.id} />
            {/* <SectionDivider /> */}
            {/* <SectionTitle>Useful Content</SectionTitle>
            <FlatGrid
                itemDimension={200}
                data={usefulContent}
                renderItem={usefulContentRenderItem}
                keyExtractor={item => item.id} /> */}
            <Text style={styles.header}>Set A New Goal</Text>
            <Text style={styles.text}>Describe your new goal here:</Text>
            <GoalInput></GoalInput>
            <Text style={styles.text}>Do you want to invite others?</Text>
            <Picker
                selectedValue={selectedValue}
                style={{
                    height: 40,
                    fontSize: 14,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    marginBottom: 10
                }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="No. Leave me alone." value="0" />
                <Picker.Item label="Sure Yes! I want to invite my friends!" value="1" />
                <Picker.Item label="Sure Yes! Make it public!" value="2" />
            </Picker>
            <Button
                onPress={SetGoal}
                title="Set Your Goal"
                color="#841584"
            />
        </View>
    );
}

const SetGoal = () => { }

const styles = StyleSheet.create({
    header: {
        color: 'chocolate',
        fontWeight: 'bold',
        fontSize: 19.2,
    },
    container: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        margin: 10,
        padding: 10,
        // fontFamily: 'Garamond, Droid Serif, serif',
        color: 'beige',
    }
});
