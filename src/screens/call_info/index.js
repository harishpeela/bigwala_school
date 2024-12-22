import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import { colors } from "../../common/theme";
import { Header } from "../../common/components/header";
import { CALLSCHOOL } from "../../constants/image_const";
const CallInfo = ({ navigation }) => {
    const openDialer = (phoneNumber) => {
        Linking.openURL(`tel:${'9705047662'}`);
    };
    return (
        <LinearGradient colors={[colors.orangeColor, colors.primaryColor]} style={styles.gradient}>
            <Header navigation={navigation} title={'School Info'} />
            <View style={styles.img1}>
                <Image source={CALLSCHOOL} resizeMode="stretch" height={'60%'} width={'60%'} style={styles.img} />
            </View>
            <View style={styles.buttonHalf}>
                <TouchableOpacity onPress={() => openDialer()} style={styles.button}>
                    <Text style={styles.butText}>
                        Call School
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}
export default CallInfo;