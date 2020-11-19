import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { data } from '../../../backend';
import { JogoController } from '../../../backend/controllers/JogoController';



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

    console.log(Jogo.acertos)
    Contador();
  },[nome])
  return (
    <View>
      <TextInput onChange={e=>setNome(e.target.value) } />
      <Text>Hello World!</Text>
    </View>
  );
}
