import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, FlatList } from "react-native";
import { Header } from "../../common/components/header";
import LinearGradient from "react-native-linear-gradient";
import { colors, window } from "../../common/theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from "./styles";
import { BUTTON } from "../../common/components/button";
import { ClassRooms, SUBJECTS, AddStudentHomeWork } from "../../utils/apis";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModeratedTextInput from "../../common/components/textinput";
const AddHomeWork = ({ navigation }) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [dropDown, setDropDown] = useState("");
    const [classes, setClasses] = useState();
    const [selectedClass, setSelectedClass] = useState();
    const [items, setItems] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [subjectsDropDown, setSubjectsDropDown] = useState("");
    const [description, setDescription] = useState('');

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

    const Subjects = async () => {
        let responce = await SUBJECTS();
        console.log('responce', responce.data);
        if (responce.status == 200) {
            setSubjects(responce.data);
        } else {
            Alert.alert('something went wrong in subjects api')
        }
    }

    const Classes = async () => {
        let responce = await ClassRooms();
        console.log('responce of c;lasses', responce.data);
        if (responce.status === 200) {
            setClasses(responce.data);
        } else {
            Alert.alert('some thing went wrong in classes')
        }

    }
    useEffect(() => {
        Subjects();
        Classes();
        const combinedData = classes?.map((item) => ({
            label: `${item.standard} - ${item.section}`,
            value: `${item.standard}-${item.section}`,
        }));
        setItems(combinedData);
    }, []);

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array?.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const chunkedClasses = chunkArray(classes, 3);
    const [selectedBoxId, setSelectedBoxId] = useState(null);
    const [selectedSubjectId, setSelectedSubjectId] = useState(null);
    const chunkedSubjects = chunkArray(subjects, 3);

    const AddHomeWorks = async () => {
        let payload = {
            subject_id: selectedSubjectId,
            context: description,
            standard: selectedClass.standard,
            section: selectedClass.section
        };
        console.log('payload', payload);

        let responce = await AddStudentHomeWork();
        console.log('responce pf AddHomeWorks', responce.data, responce.statuCode);
        if (responce.status == 201) {
            console.log(responce.data, 'jahbs');

        } else {
            Alert.alert('something went wrong in Add home works api')
        }

    }

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
                <TouchableOpacity style={styles.classRoomTab} onPress={() => setDropDown(!dropDown)}>
                    <Text style={styles.label}>Select Standard and section</Text>
                    <AntDesign name={dropDown ? "caretup" : "caretdown"} size={20} color={colors.black} style={{ alignSelf: "flex-end" }} />
                </TouchableOpacity>
                {dropDown && (
                    <>
                        <FlatList
                            horizontal={false}
                            data={chunkedClasses}
                            style={{ marginTop: 10 }}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                                    {item.map((box) => {
                                        const isSelected = selectedBoxId === box.classroom_id;

                                        return (
                                            <TouchableOpacity
                                                key={box.classroom_id}
                                                onPress={() => { setSelectedBoxId(box.classroom_id); setDropDown(!dropDown); setSelectedClass(box) }}
                                                style={{
                                                    height: 50,
                                                    width: 100,
                                                    alignItems: 'center',
                                                    backgroundColor: isSelected ? colors.orangeColor : 'white',
                                                    padding: 1,
                                                    justifyContent: 'center',
                                                    margin: 5,
                                                }}
                                            >
                                                <Text style={{ fontSize: 20, color: isSelected ? 'white' : 'black', fontWeight: 'bold' }}>
                                                    {box.standard} {box.section}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            )}
                        />

                    </>
                )
                }
            </View>

            <View style={{ marginHorizontal: window.width * 0.05 }}>
                <TouchableOpacity style={styles.classRoomTab} onPress={() => setSubjectsDropDown(!subjectsDropDown)}>
                    <Text style={styles.label}>Select Subject</Text>
                    <AntDesign name={dropDown ? "caretup" : "caretdown"} size={20} color={colors.black} style={{ alignSelf: "flex-end" }} />
                </TouchableOpacity>
                {subjectsDropDown && (
                    <FlatList
                        horizontal={false}
                        data={chunkedSubjects}
                        style={{ marginTop: 10 }}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                                {item.map((box) => {
                                    const isSelected = selectedSubjectId === box.subject_id;
                                    return (
                                        <TouchableOpacity
                                            key={box.subject_id}
                                            onPress={() => { setSelectedSubjectId(box.subject_id); setSubjectsDropDown(!subjectsDropDown) }}
                                            style={{
                                                height: 50,
                                                width: 100,
                                                alignItems: 'center',
                                                backgroundColor: isSelected ? colors.orangeColor : 'white',
                                                padding: 1,
                                                justifyContent: 'center',
                                                margin: 5,
                                            }}
                                        >
                                            <Text style={{ fontSize: 15, color: isSelected ? 'white' : 'black', fontWeight: 'bold', textTransform: 'capitalize' }}>
                                                {box.subject_name}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        )}
                    />

                )
                }
            </View>
            <View style={{ margin: 20 }}>
                <ModeratedTextInput numberOfLines={5} placeholder={'home work description'} maxLength={200} onChangeText={e => setDescription(e)} />
            </View>
            <View style={{ position: 'absolute', width: '90%', bottom: 20, marginHorizontal: 20 }}>
                <BUTTON text={'Submit'} onPress={() => { AddHomeWorks() }} />
            </View>

        </LinearGradient>
    )
}
export default AddHomeWork;