import React from 'react';
import {
  Button,
  ButtonText,
  Container,
  Header,
  Image,
  Text,
  TextInput,
  Title,
  WrapperBottomHeader,
  WrapperButton,
  WrapperInput,
  WrapperInputQuantity,
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

        <WrapperBottomHeader>
          <WrapperInputQuantity>
            <Text>Quantidade</Text>

            <TextInput />
          </WrapperInputQuantity>

          <WrapperButton>
            <Button>
              <ButtonText>Adicionar</ButtonText>
            </Button>
          </WrapperButton>
        </WrapperBottomHeader>
      </Header>
    </Container>
  );
}

export default App;
