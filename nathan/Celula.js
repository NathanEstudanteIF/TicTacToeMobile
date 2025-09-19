import styles from './CelulaStyles';

import { TouchableOpacity } from 'react-native';

export default function Celula({valor, onClick}){

    return (
        <TouchableOpacity style={styles.celula} onClick={onClick}>
            {valor}
        </TouchableOpacity>
    )
}