import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Linking, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { styles } from "./styles";
import { Header } from "../../common/components/header";

const OnLineClass = ({ navigation }) => {
    const classes = [
        { id: '1', title: 'Math Class', link: 'https://zoom.us/j/123456789#success' },
        { id: '2', title: 'Science Class', link: 'https://zoom.us/j/987654321' },
        { id: '3', title: 'History Class', link: 'https://zoom.us/j/456789123' },
    ];

    const openZoomLink = async (url) => {
        try {
            if (!url.startsWith('http') && !url.startsWith('https')) {
                Alert.alert('Invalid URL', 'The provided URL is not valid.');
                return;
            }

            const supported = await Linking.canOpenURL(url);
            if (supported) {
                console.log(`Opening URL: ${url}`);
                await Linking.openURL(url);
            } else {
                Alert.alert('Error', 'Unable to open the URL. Please ensure the app supports the provided link.');
            }
        } catch (error) {
            console.error('Failed to open URL:', error);
            Alert.alert('Error', 'Something went wrong while opening the link.');
        }
    };

    const renderClassItem = ({ item }) => (
        <TouchableOpacity style={styles.classItem} onPress={() => openZoomLink(item.link)}>
            <Text style={styles.classTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <LinearGradient colors={[colors.primaryColor, colors.secondaryColor]} style={styles.linearGradient}>
            <Header title={"Online Class"} navigation={navigation} />
            <View style={styles.container}>
                <FlatList
                    data={classes}
                    keyExtractor={(item) => item.id}
                    renderItem={renderClassItem}
                />
            </View>
        </LinearGradient>
    );
};

export default OnLineClass;
