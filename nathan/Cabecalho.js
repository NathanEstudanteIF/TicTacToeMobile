import styles from './CabecalhoStyles';

import { Text, TouchableOpacity, View } from 'react-native';

export default function Cabecalho({ vezJogador, vitoriasX, vitoriasO, reiniciar }){
    return (
        <View style={styles.cabecalho}>
            <Text style={styles.title}>Jogo da Velha</Text>
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.leftText}>Vez de Jogador: {vezJogador}</Text>
                    <TouchableOpacity style={styles.button} onPress={reiniciar}>
                        <Text style={styles.leftText}>Reiniciar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <Text style={styles.rightText}>Vitorias de X: {vitoriasX}</Text>
                    <Text style={styles.rightText}>Vitorias de O: {vitoriasO}</Text>
                </View>
            </View>
        </View>
    )
}