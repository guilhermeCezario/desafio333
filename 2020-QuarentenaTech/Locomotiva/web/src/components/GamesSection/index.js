import React from 'react';

import { GamesContainer, ContainerLeft, ContainerRight, Text, Title, Image, Button, TextGreen } from './styles';

import ControllerImage from '../../assets/controller.svg'

export default function GamesSection() {
  return (
    <GamesContainer>
      <ContainerLeft>
        <Title>Jogos</Title>
        <Text>
          O nosso catalogo de jogos atualmente
          está em crescimento, porem já contamos com grandes 
          títulos da área de games, sendo eles o <TextGreen>tetris</TextGreen> e o famoso <TextGreen>jogo da velha</TextGreen>.
        </Text>
        <Button>Ver Jogos</Button>
      </ContainerLeft>
      <ContainerRight>
        <Image src={ControllerImage}/>
      </ContainerRight>
    </GamesContainer>
  );
}
