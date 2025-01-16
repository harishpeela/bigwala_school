import { StyleSheet } from "react-native";
import { colors, window } from "../../common/theme";
export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    img1: {
        flex: 1,
    },
    buttonHalf: {
        flex: 1,
        backgroundColor: colors.primaryColor
    },
    img: {
        height: '100%',
        width: '100%',
    },
    button: {
        padding: 10,
        marginTop: window.height * 0.3,
        width: '40%',
        backgroundColor: colors.black,
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: 'center'
    },
    butText: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 16,
    },
})