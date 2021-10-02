import DeliveryButton from '@/components/delivery-button';
import FoodCategory from '@/components/food-category';
import Header from '@/components/header';
import PromotionInfo from '@/components/promotion-info';
import {Title} from '@/components/title';
import React from 'react';
import tw from 'twin.macro';
import {BodyContainer, Container, MidContainer} from './style';
import Categories from '../../public/categories.json';

export default function HomeContainer() {
  console.log(Categories);
  return (
    <Container>
      <BodyContainer>
        <Header></Header>
        <PromotionInfo></PromotionInfo>
        <MidContainer>
          <Title isBigger>Restaurant 🍔</Title>
          <DeliveryButton></DeliveryButton>
        </MidContainer>
        <div tw="flex w-full justify-around">
          {Categories.map(e => (
            <FoodCategory {...e} key={e.id}></FoodCategory>
          ))}
        </div>
      </BodyContainer>
    </Container>
  );
}
