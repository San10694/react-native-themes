import { StyleSheet } from 'react-native';

export default (Colors) => StyleSheet.create({
    container: {
        flex: 1
    },
    staticContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: Colors.titleColor
    },
    text: {
        textAlign: 'center',
        margin: 10,
        color: Colors.fontColor
    }
});