import { StyleSheet } from "react-native";
import { colors } from "../../common/theme";

export const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
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
    image: {
        width: 150, // Fixed width for better control
        height: 150, // Fixed height for better control
        margin: 8, // Consistent spacing
        borderRadius: 8, // Rounded corners
        resizeMode: 'cover', // Ensures proportional filling
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImage: {
        width: '100%', // Fill the modal width
        height: '80%', // Use most of the modal height
        resizeMode: 'contain', // Keeps aspect ratio
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    closeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});
