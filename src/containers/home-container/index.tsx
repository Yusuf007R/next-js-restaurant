import React from 'react';
import DeliveryButton from '@/components/delivery-button';
import FoodCategory from '@/components/food-category';
import Header from '@/components/header';
import PromotionInfo from '@/components/promotion-info';
import {Title} from '@/components/title';
import Categories from '../../../public/categories.json';
import Products from '../../../public/products.json';
import FoodItem from '@/components/food-item';
import {
  BodyContainer,
  CartContainer,
  CenterContainer,
  Container,
  FoodCategoriesContainer,
  FoodContainer,
  MidContainer,
  ScrollableContainer,
} from './style';
import Cart from '@/components/cart';

export default function HomeContainer() {
  return (
    <Container>
      <BodyContainer>
        <CenterContainer>
          <Header />
          <PromotionInfo />
          <MidContainer>
            <Title isBigger>Restaurant 🍔</Title>
            <DeliveryButton />
          </MidContainer>
          <ScrollableContainer>
            <FoodCategoriesContainer>
              {Categories.map(e => (
                <FoodCategory {...e} key={e.id}></FoodCategory>
              ))}
            </FoodCategoriesContainer>
          </ScrollableContainer>
          <FoodContainer>
            {Products.map(e => (
              <FoodItem {...e} key={e.id}></FoodItem>
            ))}
          </FoodContainer>
        </CenterContainer>
      </BodyContainer>
      <CartContainer>
        <Cart />
      </CartContainer>
    </Container>
  );
}
