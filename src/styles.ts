import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #0c0c0d;
`;

export const Image = styled.Image`
  background-color: red;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  position: absolute;

  margin-top: 84px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fbf9fe;

  margin-bottom: 24px;
`;

export const WrapperInput = styled.View``;

export const WrapperInputQuantity = styled.View`
  width: 60%;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #afabb6;
  font-weight: 500;

  margin-bottom: 8px;
`;

export const TextInput = styled.TextInput`
  background-color: #111112;
  border: 1px solid #252529;

  height: 40px;
  width: 100%;
  border-radius: 6px;
  padding: 8px 16px;
  color: #ffff;
`;

export const WrapperBottomHeader = styled.View`
  margin-top: 10px;

  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 40px;
`;

export const WrapperButton = styled.View`
  height: 40px;
  width: 120px;
  margin-top: auto;
`;

export const Button = styled.Pressable`
  height: 40px;
  background-color: #7450ac;

  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffff;
  text-align: center;
  line-height: 40px;
`;

export const WrapperList = styled.FlatList`
  flex: 1;

  width: 100%;
  min-height: 500px;
`;

export const WrapperCard = styled.View`
  background-color: #17171a;
  border: 1px solid #252529;
  border-radius: 8px;
  height: 68px;
  padding: 9px 18px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 8px;
`;

export const Checkbox = styled.TextInput`
  height: 20px;
  width: 20px;
  background-color: red;

  border-radius: 3px;
`;

export const ContentText = styled.View`
  margin-left: 20px;
`;

export const ItemTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fbf9fe;
`;

export const ItemText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #afabb6;
`;

export const ButtonDelete = styled.Pressable`
  height: 20px;
  width: 20px;
  background-color: blue;
  margin-left: auto;

  border-radius: 3px;
`;
