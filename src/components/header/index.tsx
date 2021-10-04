import React from 'react';
import InputHeader from '@/components/input-header';
import HamburgerMenu from '@/components/hamburger-button';
import {Title} from '@/components/title';
import CartIcon from '../../../public/assets/icons/cart-icon.svg';
import {
  Container,
  IconContainer,
  LeftSideContainer,
  RightSideContainer,
  TitleContainer,
} from './styles';
import {toggleCart} from 'src/redux/slices/cart-slice';
import {useStoreDispatch} from 'src/redux/store';
import {theme} from 'twin.macro';
import useWindowDimensions from 'src/hooks/use-window-dimensions';

export default function Header() {
  const dispatch = useStoreDispatch();
  const clickHandler = () => {
    dispatch(toggleCart());
  };

  const {width} = useWindowDimensions();
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
      {width < 1600 && (
        <IconContainer onClick={clickHandler}>
          <CartIcon fill={theme`textColor.primary`} height="50%"></CartIcon>
        </IconContainer>
      )}
    </Container>
  );
}
