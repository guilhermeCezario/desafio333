import React from 'react';

import { ContainerAbout, ContainerRight, ContainerLeft, Title, Text, Image, Link } from './styles';

import TeamImage from '../../assets/team.svg'

export default function About() {
  return (
    <ContainerAbout>
      <ContainerLeft>
        <Title>Sobre nós</Title>
        <Text>A Quarentena Tech foi desenvolvida 
          para participar do desafio 333 realizado pelo canal <Link href="https://www.twitch.tv/codigofalado" target="_blank">Código Falado</Link>, 
          que tem o intuito de incentivar a comunidade de devs a aprender tecnologias novas.</Text>
      </ContainerLeft>
      <ContainerRight>
        <Image src={TeamImage}/>
      </ContainerRight>
    </ContainerAbout>
  );
}
