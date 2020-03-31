import React from 'react';

import GlobalStyle, { Container } from '../../GlobalStyle';
import { ContainerBackground, ContainerFooter, Text, Icon, TextGreen } from './styles';

export default function Footer() {
  return (
    <ContainerBackground>
      <Container>
        <GlobalStyle/>
        <ContainerFooter>
          <Text>Feito com <Icon/> para o <TextGreen href="https://github.com/codigofalado/desafio333">desafio 333</TextGreen></Text>
        </ContainerFooter>
      </Container>
    </ContainerBackground>
  );
}
