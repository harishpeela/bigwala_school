import React, { useState } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from "./styles";
import { colors, window } from "../../common/theme";
import { Header } from "../../common/components/header";
import { Button } from "react-native-elements";
import { BUTTON } from "../../common/components/button";

const StudentsAttendence = ({ navigation }) => {
    const students = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Michael Johnson" },
        { id: 4, name: "Emily Davis" },
        { id: 5, name: "Daniel Wilson" },
        { id: 6, name: "Sophia Brown" },
        { id: 7, name: "James Jones" },
        { id: 8, name: "Olivia Garcia" },
        { id: 9, name: "Alexander Martinez" },
        { id: 10, name: "Isabella Hernandez" },
        { id: 11, name: "Ethan Clark" },
        { id: 12, name: "Charlotte Lopez" },
        { id: 13, name: "Benjamin Gonzalez" },
        { id: 14, name: "Mia Hall" },
        { id: 15, name: "William Allen" },
        { id: 16, name: "Amelia Young" },
        { id: 17, name: "Lucas Wright" },
        { id: 18, name: "Ella King" },
        { id: 19, name: "Mason Scott" },
        { id: 20, name: "Harper Adams" },
    ];

    const [selectedStudents, setSelectedStudents] = useState([]);

    const toggleSelect = (id) => {
        setSelectedStudents((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((studentId) => studentId !== id)
                : [...prevSelected, id]
        );
    };

    const renderItem = ({ item }) => {
        const isSelected = selectedStudents.includes(item.id);

        return (
            <TouchableOpacity
                onPress={() => toggleSelect(item.id)}
                style={[
                    styles.studentItem,
                    { backgroundColor: isSelected ? colors.primaryColor : colors.white },
                ]}
            >
                <Text style={[styles.studentName, { color: isSelected ? colors.white : colors.black }]}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
            <Header title={'Student Attendence'} navigation={navigation} />
            <View style={styles.listContainer}>
                <FlatList
                    data={students}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
            <View style={{marginHorizontal: window.width * 0.09, marginBottom: 10}}>
                <BUTTON text={'Submit'} onPress={() => {}} />
            </View>
        </LinearGradient>
    );
};

export default StudentsAttendence;
