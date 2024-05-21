import React from 'react';
import {
  Container,
  Header,
  Image,
  Text,
  TextInput,
  Title,
  WrapperInput,
} from './styles';

function App(): React.JSX.Element {
  return (
    <Container>
      <Image source={require('./assets/background.png')} />

      <Header>
        <Title>Lista de Compras</Title>

        <WrapperInput>
          <Text>Item</Text>

          <TextInput />
        </WrapperInput>
      </Header>
    </Container>
  );
}

export default App;
