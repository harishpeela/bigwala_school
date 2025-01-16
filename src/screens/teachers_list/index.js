import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors, window } from "../../common/theme";
import { Header } from "../../common/components/header";
import { SUBJECTS, TeacherList } from "../../utils/apis";
import { styles } from "./styles";

const TeachersList = ({ navigation }) => {
    const [teachers, setTeachers] = useState([]);

    const Subjects = async () => {
        let responce = await SUBJECTS();
        console.log('responce', responce.data);
    };

    const Teachers = async () => {
        let responce = await TeacherList();
        console.log('responce of teachers', responce.data);
        if (responce.status === 200) {
            setTeachers(responce.data);
        }
    };

    const renderTeacher = ({ item, index }) => {
        const colorsArray = [colors.primaryColor, colors.red1, colors.yellowColor, colors.green, colors.shadowColor]; 
        const backgroundColor = colorsArray[index % colorsArray.length];
        const firstName = item.first_name || '';
        const lastName = item.last_name || '';
        const email = item.email || '';
        const phoneNumber = item.phone_number || '';
        const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
        const subjectName = item.subject_name || '';
        
        return (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('teacherdetails', {
                item: item
            })}>
                <View style={[styles.initialsBox, { backgroundColor }]}>
                    <Text style={styles.initialsText}>{initials}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
                    <Text style={styles.subject}>{subjectName}</Text>
                    <Text style={styles.email}>{email}</Text>
                    <Text style={styles.phone}>{phoneNumber}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        Subjects();
        Teachers();
    }, []);

    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
            <Header 
                title="Teachers" 
                navigation={navigation} 
                plus={true} 
                marginLeft={window.width * 0.35} 
                onPressPlus={() => navigation.navigate('addteacher')} 
            />
            <View style={styles.listContainer}>
                <FlatList
                    data={teachers}
                    keyExtractor={(item) => item.TeacherID}
                    renderItem={renderTeacher}
                    contentContainerStyle={styles.flatListContent}
                />
            </View>
        </LinearGradient>
    );
};

export default TeachersList;


