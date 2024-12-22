import React from "react";
import { View, TouchableOpacity, Image, Text, Linking } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../common/theme";
import { TRACKER } from "../../constants/image_const";
import { styles } from "./styles";
import AntDesign from 'react-native-vector-icons/AntDesign';
const Tracker = ({ navigation }) => {
    const openDialer = (phoneNumber) => {
        Linking.openURL(`tel:${'9705047662'}`);
    };
    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
            <View style={styles.imageContiner}>
                <Image source={TRACKER} height={100} width={100} style={styles.img} />
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 50, left: 20 }}>
                <AntDesign name="arrowleft" color={colors.black} size={30} />
            </TouchableOpacity>
            <View style={styles.secondContainer}>
                <TouchableOpacity onPress={() => openDialer()} style={styles.button}>
                    <Text style={styles.butText}>
                        Call to Driver
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}
export default Tracker;