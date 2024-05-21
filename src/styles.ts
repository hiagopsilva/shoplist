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
