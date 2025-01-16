import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";
import { window } from "../../common/theme";
export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    topView: {
        marginTop: window.height * 0.06,
        flexDirection: 'row',
        marginHorizontal: window.width * 0.05,
        alignItems: 'center',
    },
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '20%',
    },
    dateInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        color: colors.primary,
        alignItems: 'center'
    },
    mainCard: {
        margin: '5%'
    },
    toDay: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white,
    },
    item: {
        borderWidth: 0.5,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        padding: 20,
    },
    text: {
        fontSize: 12,
        color: colors.black,
        fontWeight: '600',
    }
})