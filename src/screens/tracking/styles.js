import { StyleSheet } from "react-native";
import { colors } from "../../common/theme";

export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    imageContiner: {
        flex: 1,
        backgroundColor: colors.primaryColor
    },
    secondContainer: {
        flex: 1,
        // backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    button: {
        padding: 10,
        marginTop: '10%',
        width: '40%',
        backgroundColor: colors.black,
        alignItems: 'center',
        borderRadius: 20,
    },
    butText: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 16,
    },
})