import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { styles } from "./styles";
import { Header } from "../../common/components/header";

const NoticeBoard = ({ navigation }) => {
    const announcements = [
        {
            id: '1',
            title: 'Meeting Announcement',
            date: '2024-12-15',
            description: 'Team meeting scheduled for tomorrow at 10 AM in the conference room.',
        },
        {
            id: '2',
            title: 'Holiday Notice',
            date: '2024-12-14',
            description: 'The office will remain closed on December 25th for Christmas.',
        },
        {
            id: '3',
            title: 'Workshop Alert',
            date: '2024-12-13',
            description: 'React Native workshop on December 20th. RSVP by December 18th.',
        },
    ];

    const renderAnnouncement = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
    );
    return (
        <LinearGradient colors={[colors.primaryColor, colors.secondaryColor]} style={styles.linearGradient}>
            <Header title={"Notice Board"} navigation={navigation} />
            <View style={styles.container}>
                <FlatList
                    data={announcements}
                    renderItem={renderAnnouncement}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </LinearGradient>
    )
}
export default NoticeBoard;