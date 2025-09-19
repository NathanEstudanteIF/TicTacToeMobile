import styles from './CelulaStyles';

import { Text, TouchableOpacity } from 'react-native';

export default function Celula({valor, onClick}){

    return (
        <TouchableOpacity style={styles.celula} onPress={onClick}>
            <Text>
                {valor}
            </Text>
        </TouchableOpacity>
    )
}