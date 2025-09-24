import { ScrollView, Text, View } from 'react-native';
import Jogada from './Jogada';

import styles, { horizontal } from './RodapeStyles';

export default function Rodape({ jogadas, voltarJogada }) {
    
    return (
        <View style={styles.rodape}>
            <Text style={styles.text}>Histórico de jogadas:</Text>
            <ScrollView horizontal={horizontal}>
                {jogadas.map(
                    (jog, idJogada) => <Jogada jogada={jog} voltarJogada={() => voltarJogada(idJogada)} />
                )}
            </ScrollView>
        </View>
    )
}