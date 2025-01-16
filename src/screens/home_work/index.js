import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { colors } from "../../common/theme";
import { styles } from "./styles";
import { Header } from "../../common/components/header";

const HomeWork = ({ navigation }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const getTodayDate = () => {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
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

    let homework = [
        {
            'id': 1,
            'subject': "Englist",
            'work': "Write essay writing"
        },
        {
            'id': 2,
            'subject': "Telugu",
            'work': "Read vemula vari katha"
        },
        {
            'id': 3,
            'subject': "Science",
            'work': "Do bhoogo bhoogi"
        },

    ];

    return (
        <LinearGradient colors={[colors.primaryColor, colors.secondaryColor]} style={styles.linearGradient}>
            <Header title={"Home Work"} navigation={navigation} plus={true} onpressIcon={() => navigation.navigate('addhomework')} />
            <View style={{ padding: 20 }}>
                <TouchableOpacity onPress={showDatePicker} style={styles.date}>
                    <Text style={{ fontSize: 16, color: colors.black, fontWeight: 'bold' }}>
                        {selectedDate || `${getTodayDate()}`}
                    </Text>
                </TouchableOpacity>

                {selectedDate && (
                    <Text style={{ marginTop: 10, fontSize: 16, color: "#fff" }}>
                        Selected Date: {selectedDate}
                    </Text>
                )}

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <FlatList
                data={homework}
                style={styles.FlatList}
                keyExtractor={({ item, index }) => index}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.items}>
                        <Text style={styles.text}>
                            {item.id}.  {item.subject} : <Text style={{ color: 'black' }}>{item.work}</Text>
                        </Text>
                    </TouchableOpacity>
                )} />
        </LinearGradient>
    );
};

export default HomeWork;
