import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    topView: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 15,
    },
    listContainer: {
        flex: 1,
        padding: 20,
    },
    studentItem: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    studentName: {
        fontSize: 16,
    },
});
