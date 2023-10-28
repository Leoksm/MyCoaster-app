import React from 'react';

import {Container, PlaceIcon, PlaceLabel} from './styles';

function Place({label}: any) {
  return (
    <Container>
      <PlaceIcon name="location-on" size={20} />
      <PlaceLabel>{label}</PlaceLabel>
    </Container>
  );
}

export default Place;
