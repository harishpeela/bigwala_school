import { StyleSheet } from "react-native";
import { window } from "../../common/theme";
export const styles = StyleSheet.create({
    ImageSlideCon: {
        marginVertical: '10%',
        marginTop: window.height * 0.06,
        height: 180,
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
        // backgroundColor: 'black',
        margin: 5
    }
})