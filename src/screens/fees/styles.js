import { StyleSheet } from "react-native";
import { colors } from "../../common/theme";
export const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    FlatList: {
        margin: '10%'
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