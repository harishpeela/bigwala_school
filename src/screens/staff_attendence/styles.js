import { StyleSheet } from "react-native";
import { window } from "../../common/theme";
import { colors } from "react-native-elements";
export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    img1: {
        height: 40,
        width: 40,
    },
    listContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f6f1ea',
        margin: 20,
        padding: 5,
        borderRadius: 15,
    },
    topView: {
        marginTop: window.height * 0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: window.width * 0.05,
        alignItems: 'center',
    },
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    dateInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1, padding: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        color: colors.primary,
        alignItems: 'center'
    },
    card: {
        height: '65%',
        backgroundColor: colors.white,
        margin: '5%',
        borderRadius: 20,
    },
    itemImage: {
        height: 110,
        width: 110,
        overflow: 'hidden',
        borderRadius: 10,
    },
    item: {
        margin: 5,
    },
    cardView: {
        alignItems: 'center'
    },
    name: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: colors.black,
        marginTop: '2%',
    }
});