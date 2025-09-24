import './JogoStylePortrait.js';

import stylePortrait from './JogoStylePortrait.js';
import styleLandscape from './JogoStyleLandscape.js';
import Cabecalho from '../Cabecalho/Cabecalho.js';
import Celula from '../Celula/Celula.js';
import Rodape from '../Rodape/Rodape.js';
import { useEffect, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';

export default function Jogo() {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    const [style, setStyle] = useState(stylePortrait);

    useEffect(() => {
        setStyle(isLandscape ? styleLandscape : stylePortrait);
    }, [isLandscape])

    const [vezJogador, setVezJogador] = useState('x');
    const [vitoriasX, setVitoriasX] = useState(0);
    const [vitoriasO, setVitoriasO] = useState(0);
    const [estadoTabuleiro, setEstadoTabuleiro] = useState(Array(9).fill(null));
    const [historicoJogadas, setHistoricoJogadas] = useState([]);

    function voltarJogada(ind){
        setVezJogador(ind % 2 === 0 ? 'o' : 'x');
        setEstadoTabuleiro(historicoJogadas[ind]);
        const historico = historicoJogadas.slice(0, ind + 1);
        setHistoricoJogadas(historico);
    }
        
    function reiniciar() {
        setVezJogador('x');
        setEstadoTabuleiro(Array(9).fill(null));
        setHistoricoJogadas([]);
    }

    function deuVelha(tab){
        return !tab.includes(null);
    }

    function fimJogo(tab){
        if (tab[0] && tab[0] === tab[1] && tab[0] === tab[2]) return tab[0]
        if (tab[3] && tab[3] === tab[4] && tab[3] === tab[5]) return tab[3]
        if (tab[6] && tab[6] === tab[7] && tab[6] === tab[8]) return tab[6]
        if (tab[0] && tab[0] === tab[3] && tab[3] === tab[6]) return tab[0]
        if (tab[1] && tab[1] === tab[4] && tab[1] === tab[7]) return tab[1]
        if (tab[2] && tab[2] === tab[5] && tab[2] === tab[8]) return tab[2]
        if (tab[0] && tab[0] === tab[4] && tab[0] === tab[8]) return tab[0]
        if (tab[2] && tab[2] === tab[4] && tab[2] === tab[6]) return tab[2]

        return null
    }

    function handleClickCelula(i) {
        if (estadoTabuleiro[i] == null && fimJogo(estadoTabuleiro) == null) {
            let vez = vezJogador
            let jogada = [...estadoTabuleiro]
            let historico = [...historicoJogadas]

            jogada[i] = vez
            vez = vez === 'x' ? 'o' : 'x'
            historico.push(jogada);

            const vencedor = fimJogo(jogada);
            if (vencedor == 'x'){
                setVitoriasX(vitoriasX + 1);
                alert(`O jogo acabou. ${vencedor} venceu!!!`);
            }
            if (vencedor == 'o') {
                setVitoriasO(vitoriasO + 1);
                alert(`O jogo acabou. ${vencedor} venceu!!!`);
            }
            if (vencedor == null  && deuVelha(jogada)) {
                alert(`O jogo acabou. Deu velha!!!`);
            }
            setVezJogador(vez)
            setEstadoTabuleiro(jogada)
            setHistoricoJogadas(historico)
        } 
    }

    return (
        <View style={style.jogo}>
            <Cabecalho style={style.cabecalho} vezJogador={vezJogador} vitoriasX={vitoriasX} vitoriasO={vitoriasO} reiniciar={reiniciar} />
            <View style={style.tabuleiro}>
                <View style={style.linhaTabuleiro}>
                    <Celula valor={estadoTabuleiro[0]} onClick={() => handleClickCelula(0)} />
                    <Celula valor={estadoTabuleiro[1]} onClick={() => handleClickCelula(1)} />
                    <Celula valor={estadoTabuleiro[2]} onClick={() => handleClickCelula(2)} />
                </View>
                <View style={style.linhaTabuleiro}>
                    <Celula valor={estadoTabuleiro[3]} onClick={() => handleClickCelula(3)} />
                    <Celula valor={estadoTabuleiro[4]} onClick={() => handleClickCelula(4)} />
                    <Celula valor={estadoTabuleiro[5]} onClick={() => handleClickCelula(5)} />
                </View>
                <View style={style.linhaTabuleiro}>
                    <Celula valor={estadoTabuleiro[6]} onClick={() => handleClickCelula(6)} />
                    <Celula valor={estadoTabuleiro[7]} onClick={() => handleClickCelula(7)} />
                    <Celula valor={estadoTabuleiro[8]} onClick={() => handleClickCelula(8)} />
                </View>
            </View>
            <Rodape style={style.rodape} jogadas={historicoJogadas} voltarJogada={voltarJogada} />
        </View>
    )
}