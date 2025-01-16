import { StyleSheet } from "react-native";
import { colors } from "../../common/theme";
export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        alignItems: "center",
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
    },
    name: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
    }
})