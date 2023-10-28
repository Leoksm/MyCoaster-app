import React from 'react';
import {ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, ButtonBox, ButtonImage, Text} from './styles';

export default function Button({children, icon, source, ...rest}: any) {
  const loading = false;

  return (
    <Container>
      <ButtonBox {...rest}>
        {icon ? <Icon name={icon} size={30} color="#007aff" /> : null}
        {source ? <ButtonImage source={source} /> : null}
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text>{children}</Text>
        )}
      </ButtonBox>
    </Container>
  );
}
