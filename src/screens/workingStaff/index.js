import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, TextInput, FlatList, Alert } from "react-native";
import { colors } from "../../common/theme";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { StaffData as initialStaffData } from "../../common/components/data";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';

const WorkingStaff = ({ navigation }) => {
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [showFromPicker, setShowFromPicker] = useState(false);
    const [showToPicker, setShowToPicker] = useState(false);
    const [fromDateText, setFromDateText] = useState('');
    const [toDateText, setToDateText] = useState('');
    const [staffData, setStaffData] = useState(initialStaffData); // Set initial data

    const onChangeFromDate = (event, selectedDate) => {
        setShowFromPicker(false);
        if (event.type === "set") {
            const currentDate = selectedDate || fromDate;
            setFromDate(currentDate);
            setFromDateText(currentDate.toLocaleDateString());
        }
    };

    const onChangeToDate = (event, selectedDate) => {
        setShowToPicker(false);
        if (event.type === "set") {
            const currentDate = selectedDate || toDate;
            setToDate(currentDate);
            setToDateText(currentDate.toLocaleDateString());
        }
    };

    const showFromDatepicker = () => setShowFromPicker(true);
    const showToDatepicker = () => setShowToPicker(true);

    // Delete item function
    const onDelete = (index) => {
        Alert.alert("Delete", "Are you sure you want to delete this staff member?", [
            { text: "Cancel", style: "cancel" },
            {
                text: "OK",
                onPress: () => {
                    const updatedData = [...staffData];
                    updatedData.splice(index, 1);
                    setStaffData(updatedData);
                },
            },
        ]);
    };

    const shareToWhatsApp = (mobileNumber) => {
        const url = `whatsapp://send?phone=${mobileNumber}`;
        Linking.canOpenURL(url)
            .then(supported => {
                if (supported) {
                    Linking.openURL(url);
                } else {
                    Alert.alert("Error", "WhatsApp is not installed on this device.");
                }
            });
    };

    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
            <View style={styles.topView}>
                <AntDesign onPress={() => navigation.goBack()} name="arrowleft" size={30} color={colors.white} />
                <Text style={styles.title}>Staff Attendance</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', marginLeft: '5%' }}>
                <TouchableOpacity onPress={showFromDatepicker}>
                    <TextInput
                        style={styles.dateInput}
                        placeholder="Select From Date"
                        value={fromDateText}
                        editable={false}
                        pointerEvents="none"
                    />
                </TouchableOpacity>
                {showFromPicker && (
                    <DateTimePicker
                        value={fromDate}
                        mode="date"
                        display="default"
                        onChange={onChangeFromDate}
                    />
                )}
                <View style={{ marginLeft: 5 }}>
                    <Text style={{ color: colors.white, fontWeight: 'bold' }}>To</Text>
                </View>
                <TouchableOpacity onPress={showToDatepicker}>
                    <TextInput
                        style={{ ...styles.dateInput, marginLeft: 10 }}
                        placeholder="Select To Date"
                        value={toDateText}
                        editable={false}
                        pointerEvents="none"
                    />
                </TouchableOpacity>
                {showToPicker && (
                    <DateTimePicker
                        value={toDate}
                        mode="date"
                        display="default"
                        onChange={onChangeToDate}
                    />
                )}
            </View>

            <View style={styles.mainCard}>
                <Text style={styles.toDay}>25th Oct 2024</Text>
                <View style={{ ...styles.item, marginTop: 10, backgroundColor: colors.white }}>
                    <Text style={styles.text}>Name</Text>
                    <Text style={styles.text}>Roll</Text>
                    <Text style={styles.text}>Mobile No</Text>
                    <Text style={styles.text}>Actions</Text>
                </View>

                <FlatList
                    data={staffData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        item.present && (
                            <LinearGradient colors={[colors.white, colors.white]} style={styles.item}>
                                <Text style={styles.text}>{item.name}</Text>
                                <Text style={styles.text}>{item.roll}</Text>
                                <Text style={styles.text}>{item.mobileNumber}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => onDelete(index)}>
                                        <AntDesign name="delete" size={20} color={colors.black} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => shareToWhatsApp(item.mobileNumber)} style={{ marginLeft: 10 }}>
                                        <FontAwesome name="whatsapp" size={20} color={colors.black} />
                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>
                        )
                    )}
                />
            </View>
        </LinearGradient>
    );
};

export default WorkingStaff;
