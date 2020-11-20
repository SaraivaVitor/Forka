import React, { useEffect, useState } from 'react';
import { Text, TextInput } from 'react-native';
import { data } from '../../../backend';
import { JogoController } from '../../../backend/controllers/JogoController';

import { Container, Imagem, Texto } from './styles.js';

let Forca = require( '../../assets/0.png');


export default function Home() {

  const [ palavra, setPalavra ] = useState<string>('');
  const [ erros, setErros ] = useState<number>(0);
  const [ acertos, setAcertos ] = useState<number>(0);
  let Jogo = new JogoController(data);
  // Jogo.campos | Campos retorna os traços para digitar
  // Jogo.categoria | Categoria retorna a categoria da jogada (Nome de paises)
  
  function contas(prop:string){
    let response = Jogo.Chutar(prop)
    setPalavra("")

    if(response.pontuacao.erros >= 1){
      return setAcertos(response.pontuacao.erros);
    }
    
  
    console.log(response)
    console.log(Jogo.caracteres)
    console.log(Jogo.camposAntigos)
    console.log(Jogo.campos)

  }

  useEffect(()=>{
    
    /**
     * Condicionais que fazem com que cada vez que o usuario erre o boneco perca parte do corpo.
     */

      // if(Jogo.errors === 1){
      //   Forca = require('../../assets/1.png')
      // }
      // if(Jogo.errors === 2){
      //   Forca = require('../../assets/2.png')
      // }
      // if(Jogo.errors === 3){
      //   Forca = require('../../assets/3.png')
      // }
      // if(Jogo.errors === 4){
      //   Forca = require('../../assets/4.png')
      // }
      // if(Jogo.errors === 5){
      //   Forca = require('../../assets/5.png')
      // }
      // if(Jogo.errors === 6){
      //   Forca = require('../../assets/6.png')
      // }

    console.log(Jogo.acertos)
    console.log(Jogo.campos)

    console.log(acertos)
  },[])

   console.log(Jogo.errors)
  return (
    <Container>
      <Imagem src={Forca} />
      <Texto>Categoria:{Jogo.categoria}</Texto>
      <Texto>{Jogo.campos}</Texto>
      <TextInput value={palavra} maxLength={1} onChange={(e) => contas(e.target.value) } />  
    </Container>
  );
}
