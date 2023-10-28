import React from 'react';
import {Container, SearchIcon, Input} from './styles';

function SearchBox({label, ...rest}: any) {
  return (
    <Container>
      <SearchIcon name="search" size={15} />
      <Input placeholder={label} {...rest} />
    </Container>
  );
}

export default SearchBox;
