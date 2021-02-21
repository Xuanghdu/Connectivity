import React, { useState, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { ColorThemeContext } from '../../contexts/ColorThemeContext';
import { FlatGrid } from 'react-native-super-grid';

const images = {
    "6": require('../../../img/jpg/1.jpg'),
    "2": require('../../../img/jpg/2.jpg'),
    "0": require('../../../img/jpg/3.jpg'),
    "4": require('../../../img/jpg/4.jpg'),
    "5": require('../../../img/jpg/5.jpg'),
    "8": require('../../../img/jpg/6.jpg'),
    "9": require('../../../img/jpg/7.jpg'),
    "1": require('../../../img/jpg/8.jpg'),
    "3": require('../../../img/jpg/9.jpg'),
    "7": require('../../../img/jpg/10.jpg'),
}

function ImageItem({ index }) {
    const colorTheme = useContext(ColorThemeContext);
    return (
        <View>
            {/* <TouchableOpacity activeOpacity={.5} onPress={() => large(item)}> */}
            <Image
                // style={style}
                style={styles.item}
                source={images[index]} />
            {/* </TouchableOpacity> */}
        </View>
    );
}

export const Me = (props) => {

    // const [style, setStyle] = useState(styles.postcardSmall);
    // const large = (item) => {
    //     Alert.alert(item);
    //     setStyle(styles.postcardLarge);
    // }

    const data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // const renderItem = ({ item }) => (
    //     <View>
    //         {/* <TouchableOpacity activeOpacity={.5} onPress={() => large(item)}> */}
    //         <Image
    //             // style={style}
    //             style={styles.item}
    //             source={images[item]} />
    //         {/* </TouchableOpacity> */}
    //     </View>
    // );
    const renderItem = ({ item, index }) => {
        return <ImageItem index={index} />;
    };
    return (
        <ScrollView style={styles.top}>
            <Text style={styles.header}>Personal Profile</Text>
            <View style={styles.row}>
                <View style={styles.container}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.field}>Username: {props.username}</Text>
                    <Text style={styles.field}>Name: {props.name}</Text>
                    <Text style={styles.field}>Date of Birth: {props.dob}</Text>
                    <Text style={styles.field}>Gender: {props.gender}</Text>
                    <Text style={styles.field}>Country/Region: {props.nat}</Text>
                    <Text style={styles.field}>Contact: {props.contact}</Text>
                </View>
            </View>
            <Text style={styles.header}>Achievements</Text>
            {/* <View style={styles.columns}> */}
            {/* <View>
                <FlatList data={data} renderItem={renderItem} />
            </View> */}
            {/* <FlatGrid
                itemDimension={90}
                data={images}
                renderItem={renderItem}
                keyExtractor={item => item.id} /> */}
            <FlatGrid
                itemDimension={144}
                data={data}
                renderItem={renderItem} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    columns: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    item: {
        width: 144,
        height: 81,
    },
    top: {
        backgroundColor: "black",
        padding: 20,
        // marginVertical: 10,
    },
    row: {
        flexDirection: "row",
    },
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
    avatar: {
        width: 100,
        height: 100,
    },
    postcardSmall: {
        width: 160,
        height: 90,
    },
    postcardLarge: {
        width: 320,
        height: 180,
    },
    field: {
        // fontFamily: 'Garamond, Droid Serif, serif',
        color: 'beige',
    },
    text: {
        margin: 10,
        padding: 10,
        // fontFamily: 'Garamond, Droid Serif, serif',
        color: 'beige',
    }
});