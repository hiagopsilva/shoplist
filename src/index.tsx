import React from 'react';
import {Container, Header, Image, Title} from './styles';

function App(): React.JSX.Element {
  return (
    <Container>
      <Image source={require('./assets/background.png')} />

      <Header>
        <Title>Lista de Compras</Title>
      </Header>
    </Container>
  );
}

export default App;
