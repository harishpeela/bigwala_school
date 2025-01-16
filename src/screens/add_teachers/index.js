import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Switch, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { Header } from "../../common/components/header";
import { styles } from "./styles";
import ModeratedTextInput from "../../common/components/textinput";
import { BUTTON } from "../../common/components/button";
import DateTimePicker from "react-native-modal-datetime-picker";
import { AddTeachers, SUBJECTS } from "../../utils/apis";
import DropDownPicker from "react-native-dropdown-picker";

const AddTeacher = ({ navigation }) => {
    const [date, setDate] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [subjects, setSubjects] = useState([]);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isAdminAccess, setIsAdminAccess] = useState(false);
    //payload states//
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [salary, setSalary] = useState('');
    const [subjectId, setSubjectId] = useState(0);

    const handleToggle = (value) => {
        setIsAdminAccess(value);
        console.log("Admin Access:", value);
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (selectedDate) => {
        setDate(selectedDate);
        hideDatePicker();
        console.log('date', date);
    };

    const AddingTeacher = async () => {
        let payload = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: mobileNumber,
            hire_date: date,
            status: "Active",
            subject_id: subjectId,
            salary: salary,
            adminAccess: false
        }
        console.log('payload', payload);
        let result = await AddTeachers(payload);
        console.log("result of adding teacher", result.data);
    }


    const fetchSubjects = async () => {
        try {
            let response = await SUBJECTS();
            console.log("Response:", response.data);
            if (response.status === 200) {
                const formattedSubjects = response.data.map((subject) => ({
                    label: subject.subject_name,
                    value: subject.subject_id,
                }));
                setSubjects(formattedSubjects);
            } else {
                Alert.alert("Error", "Something went wrong in subjects API.");
            }
        } catch (error) {
            console.error("Error fetching subjects:", error);
            Alert.alert("Error", "Failed to fetch subjects.");
        }
    };

    useEffect(() => {
        fetchSubjects();
    }, []);

    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
            <Header title={"Add Teacher"} navigation={navigation} />
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <ModeratedTextInput placeholder={"First name"} maxLength={200} onChangeText={e => setFirstName(e)} />
                <ModeratedTextInput placeholder={"Last Name"} maxLength={200} onChangeText={e => setLastName(e)} />
                <ModeratedTextInput placeholder={"Email"} maxLength={200} onChangeText={e => setEmail(e)} />
                <ModeratedTextInput
                    placeholder="mobile number"
                    maxLength={10}
                    numeric={true}
                    onChangeText={e => setMobileNumber(e)}
                    value={mobileNumber}
                    errorMessage="Invalid input"
                />
                <ModeratedTextInput placeholder={"Salary"} numeric={true} maxLength={6} onChangeText={e => setSalary(e)} />
                <TouchableOpacity
                    style={{
                        padding: 15,
                        backgroundColor: colors.white,
                        borderRadius: 10,
                        justifyContent: "center",
                    }}
                    onPress={showDatePicker}>
                    <Text style={{ color: colors.black }}>
                        {date ? date.toLocaleDateString() : "Hiring Date"}
                    </Text>
                </TouchableOpacity>

                <DateTimePicker
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                />
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 20, color: colors.white, fontWeight: "bold" }}>Admin Access</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isAdminAccess ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={handleToggle}
                    value={isAdminAccess}
                />
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Text style={{ color: colors.white, fontWeight: "bold", marginBottom: 10 }}>Select Subject:</Text>
                {subjects.length > 0 ? (
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={subjects}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setSubjects}
                        placeholder="Select a subject"
                        style={{ backgroundColor: colors.white }}
                        dropDownContainerStyle={{ backgroundColor: colors.white }}
                        listMode="SCROLLVIEW"
                        onChangeValue={value => {
                            console.log('value', value);
                            setSubjectId(value);

                        }}
                    />
                ) : (
                    <Text style={{ color: colors.white }}>Loading subjects...</Text>
                )}
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 30, position: "absolute", bottom: 30, width: "90%" }}>
                <BUTTON text={"Submit"} onPress={() => AddingTeacher()} />
            </View>
        </LinearGradient>
    );
};

export default AddTeacher;
