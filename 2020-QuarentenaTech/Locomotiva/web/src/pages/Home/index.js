import React from 'react';

import GlobalStyle, {Container} from '../../GlobalStyle';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Initial from '../../components/Initial';
import About from '../../components/About';
import GamesSection from '../../components/GamesSection';

export default function Home() {
  return (
    <>
      <Header home="#00FF6B"/>
      <Container>
        <GlobalStyle/>
        <Initial/>
        <About/>
        <GamesSection/>
      </Container>
      <Footer/>
    </>
  );
}
