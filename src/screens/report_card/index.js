import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { styles } from "./styles";
import { Header } from "../../common/components/header";

const ReportCard = ({ navigation }) => {
    const reportData = [
        {
            'id': 1,
            'subject': "Mathematics",
            'unitTest1': 85,
            'unitTest2': 90,
            'finalExam': 92,
            'totalMarks': 267,
            'maxMarks': 300,
            'percentage': 89
        },
        {
            'id': 2,
            'subject': "Science",
            'unitTest1': 78,
            'unitTest2': 88,
            'finalExam': 85,
            'totalMarks': 251,
            'maxMarks': 300,
            'percentage': 83.67
        },
        {
            'id': 3,
            'subject': "English",
            'unitTest1': 82,
            'unitTest2': 85,
            'finalExam': 88,
            'totalMarks': 255,
            'maxMarks': 300,
            'percentage': 85
        },
        {
            'id': 4,
            'subject': "Social Studies",
            'unitTest1': 75,
            'unitTest2': 80,
            'finalExam': 82,
            'totalMarks': 237,
            'maxMarks': 300,
            'percentage': 79
        }
    ];

    const totalPercentage = (reportData.reduce((sum, item) => sum + item.percentage, 0) / reportData.length).toFixed(2);

    return (
        <LinearGradient colors={[colors.primaryColor, colors.secondaryColor]} style={styles.linearGradient}>
            <Header title={"Report Card"} navigation={navigation} />
            <FlatList
                ListHeaderComponent={
                    <View style={styles.items}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <Text style={[styles.text, { flex: 1 }]}>Subject</Text>
                            <Text style={[styles.text, { flex: 1 }]}>UT1</Text>
                            <Text style={[styles.text, { flex: 1 }]}>UT2</Text>
                            <Text style={[styles.text, { flex: 1 }]}>Final</Text>
                            <Text style={[styles.text, { flex: 1 }]}>Total</Text>
                            <Text style={[styles.text, { flex: 1 }]}>%</Text>
                        </View>
                    </View>
                }
                data={reportData}
                style={styles.FlatList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <Text style={[styles.text, { flex: 1 }]}>{item.subject}</Text>
                            <Text style={[styles.text, { flex: 1 }]}>{item.unitTest1}</Text>
                            <Text style={[styles.text, { flex: 1 }]}>{item.unitTest2}</Text>
                            <Text style={[styles.text, { flex: 1 }]}>{item.finalExam}</Text>
                            <Text style={[styles.text, { flex: 1 }]}>{item.totalMarks}</Text>
                            <Text style={[styles.text, { flex: 1 }]}>{item.percentage}%</Text>
                        </View>
                    </TouchableOpacity>
                )}
                ListFooterComponent={
                    <View style={[styles.items, { marginTop: 20 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <Text style={[styles.text, { flex: 2, fontSize: 16 }]}>Overall Percentage:</Text>
                            <Text style={[styles.text, { flex: 1, fontSize: 16, color: colors.orangeColor }]}>{totalPercentage}%</Text>
                        </View>
                    </View>
                }
            />
        </LinearGradient>
    )
}
export default ReportCard;