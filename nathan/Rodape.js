import { Text, View } from 'react-native';
import Jogada from './Jogada';

import styles from './RodapeStyles';

export default function Rodape({ jogadas, voltarJogada }) {
    
    return (
        <View style={styles.rodape}>
            <Text>Histórico de jogadas:</Text>
            {jogadas.map(
                (jog, idJogada) => <Jogada jogada={jog} voltarJogada={() => voltarJogada(idJogada)} />
            )}
        </View>
    )
}