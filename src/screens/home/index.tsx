import React, { useEffect, useState } from 'react';
import { Text, TextInput } from 'react-native';
import { data } from '../../../backend';
import { JogoController } from '../../../backend/controllers/JogoController';

import { Container, Imagem } from './styles.js';

let Forca = require( '../../assets/completo.png');


export default function Home() {

  const [ nome, setNome ] = useState<string[]>(['']);
  const [ erros, setErros ] = useState<number>(0);
  const [ acertos, setAcertos ] = useState<number>(0);
  let Jogo = new JogoController(data);
  // Jogo.campos | Campos retorna os traços para digitar
  // Jogo.categoria | Categoria retorna a categoria da jogada (Nome de paises)
  useEffect(()=>{
    async function Contador(){
      let response = await Jogo.Chutar(nome)
      
      if(response.pontuacao.erros){
        const newErro = erros+1;
        console.log(`Você obteve 1 erro! total: ${newErro}`)
        return setErros(newErro);
      }else if(response.pontuacao.acertos){
        const newAcerto = acertos+1;
        console.log(`Você obteve 1 Acerto! total: ${newAcerto}`)
        return setAcertos(newAcerto);
      }

    }
      
    if(erros === 1){
      Forca = require('../../assets/umaPerna.png')
    }else if(erros === 2){
      Forca = require('../../assets/semPernas.png')
    }else if(erros === 3){
      Forca = require('../../assets/umBraço.png')
    }else if(erros === 4){
      Forca = require('../../assets/semBraços.png')
    }else if(erros === 5){
      Forca = require('../../assets/soCabeça.png')
    }else if(erros === 6){
      Forca = require('../../assets/forca.png')
    }

    console.log(Jogo.acertos)
    Contador();
  },[nome])
  return (
    <Container>
      <Imagem src={Forca} />
      <TextInput onChange={e=>setNome(e.target.value) } />  
    </Container>
  );
}
