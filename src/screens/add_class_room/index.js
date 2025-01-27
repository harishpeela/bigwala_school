import React, { useEffect, useState } from "react";
import { View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { Header } from "../../common/components/header";
import { styles } from "./styles";

const AddClassRoom = ({ navigation }) => {
    const [classes, setClasses] = useState([]);
    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
            <Header title={'Add Class Room'} navigation={navigation}  />
            <View style={styles.centerContainer}>
            </View>
        </LinearGradient>
    );
};

export default AddClassRoom;
