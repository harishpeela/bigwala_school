import { StyleSheet } from "react-native";
import { window } from "../../common/theme";
import { colors } from "react-native-elements";
export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    topView: {
        flexDirection: 'row',
        marginTop: window.height * 0.06,
        marginHorizontal: window.width * 0.05,
    },
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '35%'
    },
    logout: {
        width: '90%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: '160%',
        backgroundColor: colors.white,
        borderColor: colors.orange,
        alignSelf: 'center',
    },
    logoutText: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 20
    }
})