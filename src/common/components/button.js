import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../theme";
export const BUTTON = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.logout}>
            <Text style={styles.logoutText}> {text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    logout: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: colors.white,
        borderColor: colors.orange,
        alignSelf: 'center',
    },
    logoutText: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 20
    }
})