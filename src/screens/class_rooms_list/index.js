import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { Header } from "../../common/components/header";
import { styles } from "./styles";
import { AllClassRooms } from "../../utils/apis";

const ClassRoomsList = ({ navigation }) => {
    const [classes, setClasses] = useState([]);

    const fetchClassRooms = async () => {
        try {
            let response = await AllClassRooms();
            console.log('Response:', response.data);
            if (response.status === 200) {
                setClasses(response.data);
            } else {
                Alert.alert('Error', 'Error in classRooms API');
            }
        } catch (error) {
            console.error('Error fetching classrooms:', error);
            Alert.alert('Error', 'Something went wrong');
        }
    };

    useEffect(() => {
        fetchClassRooms();
    }, []);

    const renderClassItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.card} 
            onPress={() => Alert.alert('Selected Class', `Standard: ${item.standard}, Section: ${item.section}`)}>
            <Text style={styles.cardText1}>{`Section: ${item.standard} - ${item.section}`}</Text>
        </TouchableOpacity>
    );

    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
            <Header title={'Class Rooms'} navigation={navigation} plus={true} onPressPlus={() => {navigation.navigate('addclassroom')}} />
            <View style={styles.centerContainer}>
                <FlatList
                    data={classes}
                    keyExtractor={(item) => item.classroom_id.toString()}
                    renderItem={renderClassItem}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </LinearGradient>
    );
};

export default ClassRoomsList;
