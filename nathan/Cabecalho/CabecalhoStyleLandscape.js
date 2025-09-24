import { StyleSheet} from "react-native";

export default StyleSheet.create({
    cabecalho: {
        flex: 0.2,
        flexDirection: 'column',
        padding: 12,
        gap: 12,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    section: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 12,
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
    },
    button: {
        alignSelf: 'flex-start',
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: '#ccc',
    },
    leftText: {
        fontSize: 18,
        textAlign: 'left',
    },
    rightText: {
        fontSize: 18,
        textAlign: 'left',
    },
});
