import styles from './CabecalhoStyles';

import { Text, View } from 'react-native';

export default function Cabecalho({vezJogador}){
    return (
        <View style={styles.cabecalho}>
            <Text>Jogo da Velha</Text>
            <Text>
                Vez de Jogador: {vezJogador}
            </Text>
        </View>
    )
}