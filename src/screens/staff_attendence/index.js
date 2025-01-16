import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, FlatList, Alert } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { colors } from '../../common/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
    DASHBOARDTEACHER,
    STAFFPRESENT,
    STAFFLEAVE,
    LEAVELETTERS,
    SALARIES,
    ADMIN,
} from "../../constants/image_const";

const StaffAttendence = ({ navigation }) => {
    const Data = [
        {
            id: 1,
            name: "Working",
            image: STAFFPRESENT,
            navigation: () => { navigation.navigate('workingStaff'); },
        },
        {
            id: 2,
            name: "Leave",
            image: STAFFLEAVE,
            navigation: () => { navigation.navigate('leaveStaff'); },
        },
        {
            id: 3,
            name: "Leave Letters",
            image: LEAVELETTERS,
            navigation: () => { navigation.navigate('leaveLetters'); },
        },
        {
            id: 4,
            name: "Salaries",
            image: SALARIES,
            navigation: () => { Alert.alert('Hey', 'Welcome to Bigiwala School app'); },
        },
        {
            id: 5,
            name: "Admin panel",
            image: ADMIN,
            navigation: () => { Alert.alert('Hey', 'Welcome to Bigiwala School app'); },
        },
    ];

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const showDatePicker = (mode, setDate) => {
        DateTimePickerAndroid.open({
            value: new Date(),
            mode: mode,
            is24Hour: true,
            onChange: (event, selectedDate) => {
                if (selectedDate) {
                    const formattedDate = selectedDate.toLocaleDateString();
                    setDate(formattedDate);
                }
            },
        });
    };

    return (
        <LinearGradient colors={[colors.primaryColor, colors.orangeColor]} style={styles.gradient}>
            <View style={styles.topView}>
                <AntDesign onPress={() => navigation.goBack()} name="arrowleft" size={30} color={colors.white} />
                <Text style={styles.title}>Staff Attendance</Text>
                <Image source={DASHBOARDTEACHER} height={50} width={50} style={styles.img1} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginHorizontal: '5%', marginTop: '5%', alignSelf: 'flex-end' }}>
                <TouchableOpacity onPress={() => showDatePicker('date', setFromDate)}>
                    <TextInput
                        style={styles.dateInput}
                        placeholder="Select From Date"
                        value={fromDate}
                        editable={false}
                        pointerEvents="none"
                    />
                </TouchableOpacity>
                <View style={{ marginLeft: 5 }}>
                    <Text style={{ color: colors.white, fontWeight: 'bold' }}>To</Text>
                </View>
                <TouchableOpacity onPress={() => showDatePicker('date', setToDate)}>
                    <TextInput
                        style={{ ...styles.dateInput, marginLeft: 10 }}
                        placeholder="Select To Date"
                        value={toDate}
                        editable={false}
                        pointerEvents="none"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <FlatList
                    data={Data}
                    numColumns={3}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.cardView} onPress={item.navigation}>
                                <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
                                <Text style={styles.name}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </LinearGradient>
    );
};

export default StaffAttendence;
