import React from 'react';
import DeliveryButton from '@/components/delivery-button';
import FoodCategory from '@/components/food-category';
import Header from '@/components/header';
import PromotionInfo from '@/components/promotion-info';
import {Title} from '@/components/title';
import FoodItem from '@/components/food-item';
import Cart from '../cart-container';
import {useStoreSelector} from 'src/redux/store';
import {shallowEqual} from 'react-redux';
import DarkThemeToggler from '@/components/dark-theme-toggler';
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
import useWindowDimensions from 'src/hooks/use-window-dimensions';

export default function HomeContainer() {
  const {isCartOpen, categories, products, currentCategory} = useStoreSelector(
    state => ({
      isCartOpen: state.cart.isOpen,
      products: state.mainStoreSlice.products,
      categories: state.mainStoreSlice.categories,
      currentCategory: state.mainStoreSlice.currentCategory,
    }),
    shallowEqual,
  );
  const filteredProducts = (() => {
    if (currentCategory === 1) return products;
    return products.filter(element => element.category === currentCategory);
  })();
  const {width} = useWindowDimensions();
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
              {categories.map(e => (
                <FoodCategory {...e} key={e.id}></FoodCategory>
              ))}
            </FoodCategoriesContainer>
          </ScrollableContainer>
          <FoodContainer>
            {filteredProducts.map(e => (
              <FoodItem {...e} key={e.id}></FoodItem>
            ))}
          </FoodContainer>
        </CenterContainer>
      </BodyContainer>
      {(isCartOpen || width > 1600) && (
        <CartContainer>
          <Cart />
        </CartContainer>
      )}
      <DarkThemeToggler />
    </Container>
  );
}
