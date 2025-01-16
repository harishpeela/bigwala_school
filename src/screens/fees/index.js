import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { styles } from "./styles";
import { Header } from "../../common/components/header";
const Fees = ({ navigation }) => {
    let Fee = [
        {
            'id': 1,
            'amount': "2000",
            'date': "20-04-2024",
            'type': "school fee"
        },
        {
            'id': 2,
            'amount': "1500",
            'date': "20-07-2024",
            'type': "Books fee"
        },
        {
            'id': 3,
            'amount': "1000",
            'date': "20-11-2024",
            'type': "Tution fee"

        },

    ];
    return (
        <LinearGradient colors={[colors.primaryColor, colors.secondaryColor]} style={styles.linearGradient}>
            <Header title={"Fees"} navigation={navigation} />
            <FlatList
                ListHeaderComponent={
                    <View style={styles.items}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <Text style={[styles.text, { flex: 1 }]}>Sl No</Text>
                            <Text style={[styles.text, { flex: 2 }]}>Fee Type</Text>
                            <Text style={[styles.text, { flex: 2 }]}>Amount</Text>
                            <Text style={[styles.text, { flex: 2 }]}>Due Date</Text>
                        </View>
                    </View>
                }
                data={Fee}
                style={styles.FlatList}
                keyExtractor={({ item, index }) => index}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <Text style={[styles.text, { flex: 1 }]}>{item.id}</Text>
                            <Text style={[styles.text, { flex: 2, color: 'red' }]}>{item.type}</Text>
                            <Text style={[styles.text, { flex: 2 }]}>{item.amount}</Text>
                            <Text style={[styles.text, { flex: 2, color: 'black' }]}>{item.date}</Text>
                        </View>
                    </TouchableOpacity>
                )} />
        </LinearGradient>
    )
}
export default Fees;