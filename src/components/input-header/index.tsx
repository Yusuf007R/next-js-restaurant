import React from 'react';
import {Container, ImageContainer, Input} from './styles';
import SearchIcon from '../../../public/assets/icons/search-icon.svg';
import {theme} from 'twin.macro';

export default function InputHeader() {
  return (
    <Container>
      <ImageContainer>
        <SearchIcon fill={theme`textColor.primary`} />
      </ImageContainer>
      <Input placeholder="Search" />
    </Container>
  );
}
