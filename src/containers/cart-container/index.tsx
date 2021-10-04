import React from 'react';
import PersonIcon from '../../../public/assets/icons/person-icon.svg';
import CartDirection from '../cart-direction';
import CartItem from '../../components/cart-item';
import CheckoutButton from '../../components/checkout-button';
import Divider from '../../components/divider';
import OrderCounter from '../../components/order-counter';
import {
  BodyContainer,
  BottomContainer,
  CloseButton,
  Container,
  HeaderContainer,
  HeaderItemsGroup,
  IconContainer,
  ItemCount,
  SmallText,
  Text,
  TotalContainer,
} from './style';

export default function Cart() {
  return (
    <Container>
      <BodyContainer>
        <HeaderContainer>
          <CloseButton>X</CloseButton>
          <HeaderItemsGroup>
            <IconContainer>
              <PersonIcon width="100%" height="100%" />
            </IconContainer>
            <ItemCount>3</ItemCount>
          </HeaderItemsGroup>
        </HeaderContainer>
        <Text>
          <b>My😎</b>
        </Text>
        <Text>
          <b>Order</b>
        </Text>
        <CartDirection></CartDirection>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <TotalContainer>
          <Text>Total:</Text>
          <Text>
            <b>$25.99</b>
          </Text>
        </TotalContainer>
        <Divider></Divider>
        <BottomContainer>
          <div>
            <SmallText>Persons:</SmallText>
            <OrderCounter></OrderCounter>
          </div>
          <CheckoutButton>Checkout {'-->'}</CheckoutButton>
        </BottomContainer>
      </BodyContainer>
    </Container>
  );
}
