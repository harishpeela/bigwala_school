import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import { colors, window } from "../../common/theme";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from "./styles";
import { DASHBOARDTEACHER } from "../../constants/image_const";
import { Image } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import { BUTTON } from "../../common/components/button";

const LeaveLetters = ({ navigation }) => {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [dateText, setDateText] = useState('Select Date');

    const onDateChange = (event, selectedDate) => {
        if (selectedDate) {
            setDate(selectedDate);
            setDateText(selectedDate.toLocaleDateString());
        }
        setShowPicker(false);
    };

    const showDatePicker = () => {
        console.log("Opening date picker"); // Debug log
        setShowPicker(true);
    };

    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
            <View style={styles.topView}>
                <AntDesign onPress={() => navigation.goBack()} name="arrowleft" size={30} color={colors.white} />
                <Text style={styles.title}>Leave Letter</Text>
                <Image source={DASHBOARDTEACHER} height={50} width={50} style={styles.img1} />
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
                    <Text style={styles.date}>{dateText}</Text>
                </TouchableOpacity>
                {showPicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onDateChange}
                    />
                )}

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, { textAlignVertical: "top" }]}
                        placeholder="Leave Description"
                        placeholderTextColor="black"
                        value={description}
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={setDescription}
                    />
                </View>
                <View style={{ marginTop: window.height * 0.4 }}>
                    <BUTTON text={'Submit'} onPress={() => { }} />

                </View>
            </View>
        </LinearGradient>
    );
};

export default LeaveLetters;
