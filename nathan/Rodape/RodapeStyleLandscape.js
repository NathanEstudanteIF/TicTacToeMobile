import { StyleSheet } from "react-native";

export const horizontal = true;

export default StyleSheet.create({
    rodape: {
        flex: 0.2,
        padding: 12,
        gap: 12,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
    },
    text: {
        fontSize: 18,
        textAlign: 'left',
    },
});
