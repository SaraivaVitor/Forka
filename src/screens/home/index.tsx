import React from 'react';
import { View, Text } from 'react-native';
import { data } from '../../../backend';
import { JogoController } from '../../../backend/controllers/JogoController';



export default function Home() {

  let Jogo = new JogoController(data);
  // Jogo.campos | Campos retorna os traços para digitar
  // Jogo.categoria | Categoria retorna a categoria da jogada (Nome de paises)
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}
