import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonBox = styled(RectButton)`
  border-radius: 20px;
  background: #03508c;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 120px;
  flex-direction: row;
`;

export const ButtonImage = styled.Image`
  resize-mode: cover;
  margin-left: 10px;
  margin-right: 15px;
`;

export const Text = styled.Text`
  font-size: 17px;
  color: #fff;
`;
