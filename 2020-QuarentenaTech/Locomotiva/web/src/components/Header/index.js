import React from 'react';

import { HeaderBackground, HeaderContainer, LogoContainer, Logo, LinkContainer, LinkHeader } from './styles';
import { Container } from '../../GlobalStyle';

export default function Header(props) {
  return (
    <HeaderBackground>
      <Container>
        <HeaderContainer>
          <LogoContainer>
            <Logo>Quarentena<br/>Tech</Logo>
          </LogoContainer>
          <LinkContainer>
            <LinkHeader inputColor={props.home}>Home</LinkHeader>
            <LinkHeader inputColor={props.games}>Jogos</LinkHeader>
            <LinkHeader inputColor={props.devs}>Devs</LinkHeader>
          </LinkContainer>
        </HeaderContainer>
      </Container>
    </HeaderBackground>
    
  );
}
