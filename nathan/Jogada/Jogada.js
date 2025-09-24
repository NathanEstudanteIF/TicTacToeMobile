import stylePortrait from './JogadaStylePortrait.js';
import styleLandscape from './JogadaStyleLandscape.js';

import { Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react';

export default function Jogada(props){
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    const [styles, setStyles] = useState(stylePortrait);

    useEffect(() => {
        setStyles(isLandscape ? styleLandscape : stylePortrait);
    }, [isLandscape])

    const jogada = props.jogada
    return (
            <TouchableOpacity style={styles.jogada} onPress={props.voltarJogada}>
                <Text style={styles.jogadaText}>
                    {jogada[0] || '_'} | {jogada[1] || '_'} | {jogada[2] || '_'}<br />
                    {jogada[3] || '_'} | {jogada[4] || '_'} | {jogada[5] || '_'}<br />
                    {jogada[6] || '_'} | {jogada[7] || '_'} | {jogada[8] || '_'}
                </Text>
            </TouchableOpacity>
    )
}