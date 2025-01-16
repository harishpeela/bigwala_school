import { StyleSheet } from "react-native";
import { colors, window } from "../../common/theme";
export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 300,
        height: 200,
        marginBottom: 40,
        marginTop: window.height * 0.15,
        borderRadius: 10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginVertical: 10,
        width: '100%',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: 'black',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1860EF',
        paddingVertical: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    welcome: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 24
    }
});