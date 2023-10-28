import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
`;

export const PlaceIcon = styled(Icon)`
  color: #8e8e93;
`;

export const PlaceLabel = styled.Text`
  flex: 1;
  font-size: 15px;
  padding-left: 5px;
  color: #8e8e93;
`;
