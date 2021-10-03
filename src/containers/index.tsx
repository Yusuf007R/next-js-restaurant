import DeliveryButton from '@/components/delivery-button';
import FoodCategory from '@/components/food-category';
import Header from '@/components/header';
import PromotionInfo from '@/components/promotion-info';
import {Title} from '@/components/title';
import React from 'react';
import tw from 'twin.macro';
import {
  BodyContainer,
  Container,
  FoodCategoriesContainer,
  FoodContainer,
  MidContainer,
} from './style';
import Categories from '../../public/categories.json';
import Products from '../../public/products.json';
import FoodItem from '@/components/food-item';

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
        <FoodCategoriesContainer>
          {Categories.map(e => (
            <FoodCategory {...e} key={e.id}></FoodCategory>
          ))}
        </FoodCategoriesContainer>
        <FoodContainer>
          {Products.map(e => (
            <FoodItem {...e} key={e.id}></FoodItem>
          ))}
        </FoodContainer>
      </BodyContainer>
    </Container>
  );
}
