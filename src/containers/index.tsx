import DeliveryButton from '@/components/delivery-button';
import Header from '@/components/header';
import PromotionInfo from '@/components/promotion-info';
import {Title} from '@/components/title';
import React from 'react';
import {BodyContainer, Container, MidContainer} from './style';

export default function HomeContainer() {
  return (
    <Container>
      <BodyContainer>
        <Header></Header>
        <PromotionInfo></PromotionInfo>
        <MidContainer>
          <Title isBigger>Restaurant 🍔</Title>
          <DeliveryButton></DeliveryButton>
        </MidContainer>
      </BodyContainer>
    </Container>
  );
}
