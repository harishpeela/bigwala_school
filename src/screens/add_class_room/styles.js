import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../common/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    },
    listContainer: {
        justifyContent: 'center',
    },
    card: {
        width: width * 0.8,
        backgroundColor: colors.gold,
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
        elevation: 5,
    },
    cardText: {
        fontSize: 18,
        color: colors.black,
        fontWeight: 'bold'
    },
    cardText1: {
        fontSize: 18,
        color: colors.black,
        fontWeight: 'bold'
    },
});
