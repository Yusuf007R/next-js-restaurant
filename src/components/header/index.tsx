import React from 'react';
import InputHeader from '@/components/input-header';
import HamburgerMenu from '@/components/hamburger-button';

import {
  Container,
  LeftSideContainer,
  RightSideContainer,
  TitleContainer,
} from './styles';
import {Title} from '../title';

export default function Header() {
  return (
    <Container>
      <LeftSideContainer>
        <HamburgerMenu />
        <TitleContainer>
          <Title>Chukwudi</Title>
        </TitleContainer>
      </LeftSideContainer>
      <RightSideContainer>
        <InputHeader />
      </RightSideContainer>
    </Container>
  );
}
