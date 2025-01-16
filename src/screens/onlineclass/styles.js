import { StyleSheet } from "react-native";
import { colors } from "../../common/theme";
export const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    classItem: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: colors.white,
        borderRadius: 8,
    },
    classTitle: {
        color: colors.black,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})