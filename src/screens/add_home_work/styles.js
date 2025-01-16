import { StyleSheet } from "react-native";
import { colors } from "../../common/theme";
export const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    date: {
        width: '30%',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        backgroundColor: colors.white
    },
    classRoomTab: {
        zIndex: 3000,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: colors.white,
    },
    label: {
        color: colors.black,
        fontWeight: '600',
    }
})