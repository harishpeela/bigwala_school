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
    FlatList: {
        marginHorizontal: '10%'
    },
    items: {
        width: '100%',
        padding: 10,
        margin: '1%',
        backgroundColor: colors.white,
    },
    text: {
        color: colors.primaryColor,
        fontWeight: 'bold',
    }
})