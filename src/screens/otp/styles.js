import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '../../common/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    gradient: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 8,
        height: 48,
        width: 48,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 18,
    },
    button: {
        backgroundColor: colors.primaryColor,
        paddingVertical: 15,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
    },
    timer: {
        marginTop: 10,
        color: colors.gray,
        fontSize: 14,
    },
});
