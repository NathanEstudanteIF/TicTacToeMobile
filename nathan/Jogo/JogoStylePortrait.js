import { StyleSheet } from "react-native";

export default StyleSheet.create({
    jogo: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eee',
    },
    tabuleiro: {
        flex: 0.6,
        flexDirection: 'column',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
    },
    linhaTabuleiro: {
        justifyContent: 'center',
        flexDirection: 'row',
    }
});

