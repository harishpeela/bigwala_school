import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { styles } from "./styles";
import { Header } from "../../common/components/header";

const Attendence = ({ navigation }) => {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const attendanceData = [
        {
            'id': 1,
            'date': "01-04-2024",
            'status': "Present"
        },
        {
            'id': 2,
            'date': "02-04-2024",
            'status': "Absent"
        },
        {
            'id': 3,
            'date': "03-04-2024",
            'status': "Present"
        },
        {
            'id': 4,
            'date': "04-04-2024",
            'status': "Present"
        },
        {
            'id': 5,
            'date': "05-04-2024",
            'status': "Absent"
        },
        {
            'id': 6,
            'date': "06-04-2024",
            'status': "Present"
        },
        {
            'id': 7,
            'date': "07-04-2024",
            'status': "Present"
        },
        {
            'id': 8,
            'date': "08-04-2024",
            'status': "Absent"
        },
        {
            'id': 9,
            'date': "09-04-2024",
            'status': "Present"
        },
        {
            'id': 10,
            'date': "10-04-2024",
            'status': "Present"
        },
        {
            'id': 11,
            'date': "11-04-2024",
            'status': "Absent"
        },
        {
            'id': 12,
            'date': "12-04-2024",
            'status': "Present"
        },
        {
            'id': 13,
            'date': "13-04-2024",
            'status': "Present"
        },
        {
            'id': 14,
            'date': "14-04-2024",
            'status': "Absent"
        },
        {
            'id': 15,
            'date': "15-04-2024",
            'status': "Present"
        }
    ];

    const filteredData = attendanceData.filter(item => {
        if (selectedFilter === 'present') return item.status === 'Present';
        if (selectedFilter === 'absent') return item.status === 'Absent';
        return true; // For 'all' filter
    });

    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.linearGradient}>
            <Header title={"Attendance"} navigation={navigation} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                <TouchableOpacity
                    onPress={() => setSelectedFilter('all')}
                    style={[styles.filterButton, selectedFilter === 'all' && styles.selectedFilter]}>
                    <Text style={styles.text}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSelectedFilter('present')}
                    style={[styles.filterButton, selectedFilter === 'present' && styles.selectedFilter]}>
                    <Text style={styles.text}>Present</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSelectedFilter('absent')}
                    style={[styles.filterButton, selectedFilter === 'absent' && styles.selectedFilter]}>
                    <Text style={styles.text}>Absent</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                ListHeaderComponent={
                    <View style={styles.items}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <Text style={[styles.text, { flex: 1 }]}>Sl No</Text>
                            <Text style={[styles.text, { flex: 2 }]}>Date</Text>
                            <Text style={[styles.text, { flex: 2 }]}>Status</Text>
                        </View>
                    </View>
                }
                data={filteredData}
                style={styles.FlatList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <Text style={[styles.text, { flex: 1 }]}>{item.id}</Text>
                            <Text style={[styles.text, { flex: 2 }]}>{item.date}</Text>
                            <Text style={[styles.text, { flex: 2, color: item.status === 'Present' ? 'green' : 'red' }]}>
                                {item.status}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </LinearGradient>
    )
}
export default Attendence;