/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  Button,
  ButtonDelete,
  ButtonText,
  Checkbox,
  Container,
  ContentText,
  Header,
  Image,
  ItemText,
  ItemTitle,
  Text,
  TextInput,
  Title,
  WrapperBottomHeader,
  WrapperButton,
  WrapperCard,
  WrapperInput,
  WrapperInputQuantity,
  WrapperList,
} from './styles';

function App(): React.JSX.Element {
  const dataList = [
    {
      id: '1',
      title: 'Arroz',
      quantity: 2,
    },
    {
      id: '2',
      title: 'Feijão',
      quantity: 3,
    },
    {
      id: '3',
      title: 'Macarrão',
      quantity: 4,
    },
  ];
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

        <WrapperList
          data={dataList}
          keyExtractor={(item: any) => item?.id}
          ListEmptyComponent={() => <Text>Nenhum item na lista</Text>}
          renderItem={({item}: any) => (
            <WrapperCard>
              <Checkbox />

              <ContentText>
                <ItemTitle>{item?.title}</ItemTitle>
                <ItemText>{item?.quantity} unidades</ItemText>
              </ContentText>

              <ButtonDelete />
            </WrapperCard>
          )}
        />
      </Header>
    </Container>
  );
}

export default App;
