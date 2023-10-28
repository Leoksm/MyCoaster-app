import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #8e8e933d;
  border-radius: 10px;
  padding: 0 15px;
  border: 0px;
`;

export const SearchIcon = styled(Icon)`
  padding: 0px;
  color: #93a3c1;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#93A3C1',
})`
  flex: 1;
  padding: 10px;
  font-size: 17px;
  color: #fff;
  height: 50px;
`;
