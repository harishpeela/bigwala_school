import { StyleSheet } from "react-native";
import { colors, window } from "../../common/theme";
export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    listContainer: {
        flex: 1, // Ensures FlatList takes up the remaining space
        marginTop: 20,
    },
    flatListContent: {
        paddingBottom: 20, // Optional padding for better appearance
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 3,
    },
    initialsBox: {
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    initialsText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: 'uppercase',
        color: colors.black
    },
    subject: {
        fontSize: 14,
        color: colors.gray,
    },
    email: {
        fontSize: 14,
        color: colors.gray,
    },
    phone: {
        fontSize: 14,
        color: colors.gray,
    },
});