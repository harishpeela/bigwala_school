import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { Header } from "../../common/components/header";
import { styles } from "./styles";
import { SUBJECTS } from "../../utils/apis";
const ClassRoomsList = ({ navigation }) => {
    
    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
            <Header title={'Class Rooms'} navigation={navigation} />
        </LinearGradient>
    )
}
export default ClassRoomsList;