import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput } from 'react-native';
import palavra from '../../../backend';
import { JogoController } from '../../../backend/controllers/JogoController';

// Folha de estilo, com o STYLED COMPONENTS
import { Container, Imagem, Texto } from './styles.ts';
//Importando imagens
let Forca = require( '../../assets/0.png');
let Forca1 = require( '../../assets/1.png');
let Forca2 = require( '../../assets/2.png');
let Forca3 = require( '../../assets/3.png');
let Forca4 = require( '../../assets/4.png');
let Forca5 = require( '../../assets/5.png');
let Forca6 = require( '../../assets/6.png');

//CONTROLLER DO JOGO
let Jogo = new JogoController(palavra);

export default function Home({ navigation }): JSX.Element {
  //Variaveis de estado, para renderizar componentes
  const [ palavras, setPalavra ] = useState<string>(''); 
  const [ erros, setErros ] = useState<number>(0);
  const [ acertos, setAcertos ] = useState<number>(0);

  //Função responsavel por intermediar o que é inputado para o back-end tratar
  function contas(prop:string){ 
    let response = Jogo.Chutar(prop)
    setAcertos(response.pontuacao.acertos)
    setErros(response.pontuacao.erros);
  }


  return (
    
    <Container>
      { /* COMPONENTE RESPONSAVEL REMOVER PARTES DO CORPO A CADA ERRO */}
      { erros === 1 ? <Imagem src={Forca1} />
       : erros ===2 ? <Imagem src={Forca2} /> 
       : erros ===3 ? <Imagem src={Forca3} />
       : erros ===4 ? <Imagem src={Forca4} />
       : erros ===5 ? <Imagem src={Forca5} />
       : erros ===6 ? <Imagem src={Forca6} />
       : <Imagem src={Forca} />
      }

      <Texto>Acertos: {acertos}</Texto> {/* Mostrar os acertos, quando o usuario acertar */}
      <Texto>{Jogo.campos}</Texto> {/* Mostrar os campos quando forem acertados */}
      
      {/** inputando na variavel de estado, sempre que for digitado algo, o onchange é o evento que dispara */} 
      <TextInput value={palavras} maxLength={1} onChange={(e) => contas(e.target.value) } /> 
    </Container>
  );
}
