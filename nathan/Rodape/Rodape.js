import { ScrollView, Text, useWindowDimensions, View } from 'react-native';
import Jogada from '../Jogada/Jogada.js';

import stylePortrait from './RodapeStylePortrait.js';
import styleLandscape from './RodapeStyleLandscape.js';
import { useEffect, useState } from 'react';

export default function Rodape({ jogadas, voltarJogada }) {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    const [styles, setStyles] = useState(stylePortrait);

    useEffect(() => {
        setStyles(isLandscape ? styleLandscape : stylePortrait);
    }, [isLandscape])
    
    return (
        <View style={styles.rodape}>
            <Text style={styles.text}>Histórico de jogadas:</Text>
            <ScrollView horizontal={!isLandscape}>
                {jogadas.map(
                    (jog, idJogada) => <Jogada jogada={jog} voltarJogada={() => voltarJogada(idJogada)} />
                )}
            </ScrollView>
        </View>
    )
}