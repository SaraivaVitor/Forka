import React from 'react';
import { Button } from 'react-native';

import { Container, Imagem, Texto } from '../home/styles.ts';

//Rota primaria, tela do jogo enviando para o registro de nome
export default function Index({ navigation }): JSX.Element {
  return (
    <Container>
      <Imagem src={require('../../assets/Logo.svg')} />
      <Texto>Welcome!</Texto>
      <Button title="Jogar!" onPress={()=>navigation.navigate("Register")} />
     </Container>
  );
}
