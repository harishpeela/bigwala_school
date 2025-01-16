import { StyleSheet } from "react-native";
import { colors, window } from "../../common/theme";
export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    nameText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    designationText: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
    },
    detailsContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    detailText: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
    },
})