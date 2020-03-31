import React from 'react';
import { ScrollTo } from "react-scroll-to";

import {ContainerInitial, ContainerLeft, ContainerRight, Image, Text, TextGreen, Title, Icon} from './styles';

import OldGames from '../../assets/oldgame.svg'

export default function Initial(refs) {

  return (
    <ContainerInitial>
      <ContainerLeft>
        <Title>Quarentena Tech</Title>
        <Text><TextGreen>Venha jogar!</TextGreen> navegue para encontrar os melhores jogos e começar a sua diversão.</Text>
      </ContainerLeft>
      <ContainerRight>
        <Image src={OldGames}/>
      </ContainerRight>
      <ScrollTo>
        {({ scroll }) => (
          <Icon onClick={() => scroll({ x: 0, y: 950 })}/>
        )}
      </ScrollTo>
      
    </ContainerInitial>
  );
}
