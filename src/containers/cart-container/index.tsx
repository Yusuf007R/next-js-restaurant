import React from 'react';
import PersonIcon from '../../../public/assets/icons/person-icon.svg';
import CartDirection from '@/components/cart-direction';
import CartItem from '@/components/cart-item';
import CheckoutButton from '@/components/checkout-button';
import Divider from '@/components/divider';

import {
  BodyContainer,
  BottomContainer,
  CloseButton,
  Container,
  HeaderContainer,
  HeaderItemsGroup,
  IconContainer,
  ItemCount,
  Text,
  TotalContainer,
} from './style';
import {useStoreDispatch, useStoreSelector} from 'src/redux/store';
import {closeCart} from 'src/redux/slices/cart-slice';
import useCartProducts from 'src/hooks/use-cart-products';
import {shallowEqual} from 'react-redux';
import {theme} from 'twin.macro';
import LoginCard from '@/components/login-card';

export default function Cart() {
  const totalPrice = useCartProducts();
  const dispatch = useStoreDispatch();
  const handleClose = () => {
    dispatch(closeCart());
  };
  const {productsInCart} = useStoreSelector(
    state => ({
      productsInCart: state.cart.productsInCart,
    }),
    shallowEqual,
  );
  return (
    <Container>
      <BodyContainer>
        <HeaderContainer>
          <CloseButton onClick={handleClose}>X</CloseButton>
          <HeaderItemsGroup>
            {/* <IconContainer>
              <PersonIcon
                width="100%"
                height="100%"
                fill={theme`textColor.primary`}
              />
            </IconContainer> */}
            <LoginCard></LoginCard>
            <ItemCount>{productsInCart.length}</ItemCount>
          </HeaderItemsGroup>
        </HeaderContainer>
        <Text>
          <b>My😎</b>
        </Text>
        <Text>
          <b>Order</b>
        </Text>
        <CartDirection />
        {productsInCart.map(element => (
          <CartItem {...element} key={element.product.id}></CartItem>
        ))}
        <TotalContainer>
          <Text>Total:</Text>
          <Text>
            <b>${Math.round(totalPrice * 100) / 100}</b>
          </Text>
        </TotalContainer>
        <Divider />
        <BottomContainer>
          <CheckoutButton>Checkout {'-->'}</CheckoutButton>
        </BottomContainer>
      </BodyContainer>
    </Container>
  );
}
