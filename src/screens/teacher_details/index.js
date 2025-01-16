import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { Header } from "../../common/components/header";
import { styles } from "./styles";
import { TEACHER } from "../../constants/image_const";
const TeacherDetails = ({ navigation, route }) => {
    const { item } = route.params || {};
    console.log('item==>', item);
    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
            <Header navigation={navigation} title={'Teacher Details'} />

            <View style={styles.container}>
                <Image
                    source={TEACHER}
                    style={styles.profileImage}
                />
                <Text style={styles.nameText}>{`${item.first_name} ${item.last_name}`}</Text>
                <Text style={styles.designationText}>{item.subject_name}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailText}><Text style={styles.label}>Email:</Text> {item.email}</Text>
                    <Text style={styles.detailText}><Text style={styles.label}>Phone:</Text> {item.phone_number}</Text>
                    <Text style={styles.detailText}><Text style={styles.label}>Standard:</Text> {item.standard}</Text>
                    <Text style={styles.detailText}><Text style={styles.label}>Section:</Text> {item.section}</Text>
                    <Text style={styles.detailText}><Text style={styles.label}>Status:</Text> {item.status}</Text>
                    <Text style={styles.detailText}><Text style={styles.label}>Admin Access:</Text> {item.adminAccess ? 'Yes' : 'No'}</Text>
                </View>
            </View>
        </LinearGradient>
    );
};
export default TeacherDetails;
