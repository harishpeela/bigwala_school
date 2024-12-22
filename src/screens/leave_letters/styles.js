import { StyleSheet } from "react-native";
import { window } from "../../common/theme";
import { colors } from "react-native-elements";
export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },

    topView: {
        marginTop: window.height * 0.06,
        flexDirection: 'row',
        marginHorizontal: window.width * 0.05,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    img1: {
        height: 40,
        width: 40,
    },
    date: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold',
        borderWidth: 0.5,
        padding: 5,
        width: '35%',
        borderColor: colors.white,
    },
    container: {
        margin: '5%',
        marginTop: '15%',

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
    input: {
        flex: 1,
        color: 'black',
        fontSize: 16,
    },
    submit: {
        width: '20%',
        borderWidth: 1,
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '80%',
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    submitText:{
        fontWeight: 'bold',
        color: colors.black,
    }
});