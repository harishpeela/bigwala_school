import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Header } from "../../common/components/header";
import LinearGradient from "react-native-linear-gradient";
import { colors, window } from "../../common/theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from "./styles";
import DropDown from "../../common/components/dropdown";
import ModeratedTextInput from "../../common/components/textinput";
import { BUTTON } from "../../common/components/button";
const AddHomeWork = ({ navigation }) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [text, setText] = useState("");

    const validateInput = (input) => {
        const regex = /^[a-zA-Z0-9\s]*$/;
        if (!regex.test(input)) {
            return "No special characters allowed.";
        }
        return null;
    };
    const [classItem, setClassItem] = useState([
        { label: 'Class I', value: 'option1' },
        { label: 'Class II', value: 'option2' },
        { label: 'Class III', value: 'option3' },
        { label: 'Class IV', value: 'option4' },
        { label: 'Class V', value: 'option5' },
        { label: 'Class VI', value: 'option6' },
        { label: 'Class VII', value: 'option7' },
        { label: 'Class VIII', value: 'option8' },
        { label: 'Class IX', value: 'option9' },
        { label: 'Class X', value: 'option10' },
    ]);
    const [classSection, setClassSection] = useState([
        { label: 'Section A', value: 'option1' },
        { label: 'Section B', value: 'option2' },
        { label: 'Section C', value: 'option3' },

    ]);
    const [classSubject, setClassSubjects] = useState([
        { label: 'Telugu', value: 'option1' },
        { label: 'Hindi', value: 'option2' },
        { label: 'Maths', value: 'option3' },
        { label: 'Science', value: 'option4' },
        { label: 'Social', value: 'option5' },
        { label: 'Maths', value: 'option6' },

    ]);
    const getTodayDate = () => {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("Selected date: ", date);
        setSelectedDate(date.toLocaleDateString());
        hideDatePicker();
    };

    return (
        <LinearGradient colors={[colors.primaryColor, colors.secondaryColor]} style={styles.linearGradient}>
            <Header title={" Add Home Work"} navigation={navigation} />
            <View style={{ padding: 20 }}>
                <TouchableOpacity onPress={showDatePicker} style={styles.date}>
                    <Text style={{ fontSize: 16, color: colors.black, fontWeight: 'bold' }}>
                        {selectedDate || `${getTodayDate()}`}
                    </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <View style={{ marginHorizontal: window.width * 0.05 }}>
                <View style={{ zIndex: 3000 }}>
                    <DropDown items={classItem} setItems={setClassItem} placeholder={'Select Class'} />
                </View>
                <View style={{ zIndex: 2000 }}>
                    <DropDown items={classSection} setItems={setClassSection} placeholder={'Select Section'} />
                </View>
                <View style={{ zIndex: 1000 }}>
                    <DropDown items={classSubject} setItems={setClassSubjects} placeholder={'Select Subject'} />
                </View>
                <View style={{ zIndex: 1000 }}>
                    <ModeratedTextInput
                        placeholder="Enter your description"
                        maxLength={50}
                        value={text}
                        onChangeText={setText}
                        validateInput={validateInput}
                        errorMessage="Please enter valid text."
                    />
                </View>
                <View style={{marginTop: window.height * 0.4}}>
                <BUTTON text={'Submit'} onPress={() => { }} />

                </View>
            </View>

        </LinearGradient>
    )
}
export default AddHomeWork;