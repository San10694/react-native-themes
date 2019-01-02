import { StyleSheet } from 'react-native';

export default (colors) => StyleSheet.create({
    container: {
        flex: 1
    },
    staticContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: colors.titleColor
    },
    text: {
        textAlign: 'center',
        margin: 10,
        color: colors.fontColor
    }
});