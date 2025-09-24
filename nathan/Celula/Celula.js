import stylePortrait from './CelulaStylePortrait.js';
import styleLandscape from './CelulaStyleLandscape.js';

import { Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';

export default function Celula({valor, onClick}){
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    const [styles, setStyles] = useState(stylePortrait);

    useEffect(() => {
        setStyles(isLandscape ? styleLandscape : stylePortrait);
    }, [isLandscape])

    return (
        <TouchableOpacity style={styles.celula} onPress={onClick}>
            <Text style={styles.valorCelula}>
                {valor}
            </Text>
        </TouchableOpacity>
    )
}