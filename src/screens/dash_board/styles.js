import { StyleSheet } from "react-native";
import { window } from "../../common/theme";
export const styles = StyleSheet.create({
    ImageSlideCon: {
        marginVertical: '5%',
        marginTop: window.height * 0.03,
        height: window.height * 0.2,
        marginHorizontal: window.width * 0.06,
        elevation: 5,
        borderRadius: 5,
        overflow: 'hidden'
    },
    gradient: {
        flex: 1,
    },
    itemName: {
        fontSize: 10,
        fontWeight: '600',
        color: 'black',
    },
    itemImage: {
        height: 100,
        width: 100,
        overflow: 'hidden',
        borderRadius: 10,
    },
    listContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f6f1ea',
        margin: 20,
        padding: 5,
        borderRadius: 15,
    },
    item: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img1: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    topView: {
        marginTop: window.height * 0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: window.width * 0.05
    }
})