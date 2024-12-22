import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { window } from "../theme";
import { colors, Icon } from "react-native-elements";
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Header = ({ title, navigation, plus, onpressIcon }) => {
    return (
        <View style={{ ...styles.topView }}>
            <AntDesign onPress={() => navigation.goBack()} name="arrowleft" size={30} color={colors.white} />
            <Text style={styles.title}>{title}</Text>
            {plus && (
                <View style={{ marginLeft: window.width * 0.25 }}>
                    <AntDesign name="plus" size={20} color={'white'} onPress={onpressIcon} />
                </View>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    topView: {
        flexDirection: 'row',
        marginTop: window.height * 0.06,
        marginHorizontal: window.width * 0.05,
    },
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '27%'
    },
});