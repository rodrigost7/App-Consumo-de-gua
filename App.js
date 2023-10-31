import React, { useState } from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const TelaPrincipal = styled.View`
  flex: 1;
  background-color: lightblue;
`;

const Header = styled.View`
margin-top: 50px;
  height: 60px;
  width: 100%;
  background-color: #276DB3;
  justify-content: center;
  align-items: center;
`;
const Titulo = styled.Text`
  font-size: 30px;
  color: white;
`;
const Descricao = styled.Text`
  font-size: 20px;
  color: black;
  text-align: center;
  margin-top: 20px;
`;
const Texto = styled.Text`
  font-size: 20px;
  color: white;
  text-align: center;
`;
const Imagens = styled.Image`
  height: 200px;
  width: 100%;
`;

const botao = styled.TouchableOpacity`
  background-color: #276DB3;
`;

const DivBotao = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

const Resultado = styled.Text`
  font-size: 35px;
  color: black;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
`;
export default function App() {

    //criando a constante que vai receber a quantidade
      const [quantidadeConsumo, setQuantidadeConsumo]=useState(0);
       const addQuantidade = (quantidade)=>{ //criando função que vai realzar a contagem
        setQuantidadeConsumo(quantidadeConsumo+quantidade);
       };   

  return (
    <TelaPrincipal>
      <Header>
        <Titulo>Água e Saúde</Titulo>
      </Header>
      <Imagens
        source={require('./src/imagens/imagem1.png')}
      />
      <Descricao>Clique no botão abaixo de acrdo
        com a quantidade de ml consumida
      </Descricao>

      <DivBotao>
        <TouchableOpacity style={estilo.botao} onPress={()=>addQuantidade(200)}>
          <Texto>200 ml</Texto>
        </TouchableOpacity>
        <TouchableOpacity style={estilo.botao} onPress={()=>addQuantidade(300)}>
          <Texto>
            300 ml
          </Texto>
        </TouchableOpacity>
        <TouchableOpacity style={estilo.botao} onPress={()=>addQuantidade(500)}>
          <Texto>
            500ml
          </Texto>
        </TouchableOpacity>
      </DivBotao>

      <Resultado>
        Consumo: {quantidadeConsumo} ml
      </Resultado>
      <Descricao>Autor: Antônio Rodrigo</Descricao>
    </TelaPrincipal>
  );
}

const estilo = StyleSheet.create({
  botao:{
    backgroundColor: '#276DB3',
    borderRadius: 8,
    padding: 10,
    width: 100,
    justifyContent: 'center'
  }

});
