import React,{ useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Register({ navigation }) {

  const [nome,setNome] = useState<string>('');


  function setarNome(prop:any){
    
    setNome(prop)
  }

  return (
    <View>
        <Text>Olá, nos diga qual o seu nome!</Text>
        <TextInput value={nome} placeholder="Digite aqui o seu nome" onChange={(e)=> setarNome(e.target.value) } />
        <Button title="Pronto" onPress={()=> navigation.navigate('Home') } />
     </View>
  );
}
