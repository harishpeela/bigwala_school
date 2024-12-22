import { StyleSheet } from "react-native";
import { colors } from "../../common/theme";
export const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    container: {
        flex: 1,
        // backgroundColor: '#f9f9f9',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        textAlign: 'center',
    },
    list: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    date: {
        fontSize: 14,
        color: '#888',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#555',
    },

})