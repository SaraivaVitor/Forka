import React, { useEffect, useState } from 'react';
import { Text, TextInput } from 'react-native';
import { data } from '../../../backend';
import { JogoController } from '../../../backend/controllers/JogoController';


import { Container, Imagem, Texto } from './styles.js';

let Forca = require( '../../assets/0.png');
let Forca1 = require( '../../assets/1.png');
let Forca2 = require( '../../assets/2.png');
let Forca3 = require( '../../assets/3.png');
let Forca4 = require( '../../assets/4.png');
let Forca5 = require( '../../assets/5.png');
let Forca6 = require( '../../assets/6.png');


export default function Home() {

  const [ palavra, setPalavra ] = useState<string>('');
  const [ erros, setErros ] = useState<number>(0);
  const [ acertos, setAcertos ] = useState<number>(0);
  let Jogo = new JogoController(data);
  // Jogo.campos | Campos retorna os traços para digitar
  // Jogo.categoria | Categoria retorna a categoria da jogada (Nome de paises)
  
  function contas(prop:string){
    let response = Jogo.Chutar(prop)
    

    console.log(response.pontuacao.erros)
    console.log(Jogo.caracteres)
    console.log(Jogo.camposAntigos)
    console.log(Jogo.campos)
    return setErros(response.pontuacao.erros);
  }

  // useEffect(()=>{
    
  //   /**
  //    * Condicionais que fazem com que cada vez que o usuario erre o boneco perca parte do corpo.
  //    */

  //     // if(Jogo.errors === 1){
  //     //   Forca = require('../../assets/1.png')
  //     // }
  //     // if(Jogo.errors === 2){
  //     //   Forca = require('../../assets/2.png')
  //     // }
  //     // if(Jogo.errors === 3){
  //     //   Forca = require('../../assets/3.png')
  //     // }
  //     // if(Jogo.errors === 4){
  //     //   Forca = require('../../assets/4.png')
  //     // }
  //     // if(Jogo.errors === 5){
  //     //   Forca = require('../../assets/5.png')
  //     // }
  //     // if(Jogo.errors === 6){
  //     //   Forca = require('../../assets/6.png')
  //     // }

  //   console.log(Jogo.acertos)
  //   console.log(Jogo.campos)

  //   console.log(acertos)
  // },[])



  return (
    
    <Container>
      { erros === 1 ? <Imagem src={Forca1} />
       : erros ===2 ? <Imagem src={Forca2} />
       : erros ===3 ? <Imagem src={Forca3} />
       : erros ===4 ? <Imagem src={Forca4} />
       : erros ===5 ? <Imagem src={Forca5} />
       : erros ===6 ? <Imagem src={Forca6} />
       : <Imagem src={Forca} />
      }
      
      <Texto>Categoria:{Jogo.categoria}</Texto>
      <Texto>{Jogo.campos}</Texto>
      <TextInput value={palavra} maxLength={1} onChange={(e) => contas(e.target.value) } />  
    </Container>
  );
}
