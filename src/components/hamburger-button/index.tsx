import React from 'react';
import {theme} from 'twin.macro';
import {Container, Stripe} from './style';

export default function HamburgerMenu() {
  return (
    <Container>
      <Stripe color={theme`textColor.primary`} />
      <Stripe color={theme`textColor.primary`} />
    </Container>
  );
}
