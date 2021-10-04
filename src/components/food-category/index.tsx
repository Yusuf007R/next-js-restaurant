import React, {useContext, useState} from 'react';
import {Container, IconContainer, StyledImage, Text} from './style';
import {categoriesType} from 'src/redux/slices/products-slice';
import {ThemeContext} from 'src/theme/theme-provider';
import {theme} from 'twin.macro';
import {useStoreDispatch, useStoreSelector} from 'src/redux/store';
import {setCurrentCategory} from 'src/redux/slices/products-slice';

export default function FoodCategory({name, icon, id}: categoriesType) {
  const currentCategory = useStoreSelector(
    state => state.mainStoreSlice.currentCategory,
  );
  const dispatch = useStoreDispatch();
  const themeContext = useContext(ThemeContext);
  const isPressed = currentCategory === id;

  const handleClick = () => {
    dispatch(setCurrentCategory(id));
  };

  return (
    <Container onClick={handleClick} isPressed={isPressed}>
      <IconContainer>
        <StyledImage
          width="35%"
          height="35%"
          alt={`${name} icon`}
          src={icon}
          isDarkTheme={themeContext.theme === 'dark'}
        />
      </IconContainer>
      <Text
        color={isPressed ? theme`textColor.black` : theme`textColor.primary`}>
        {name}
      </Text>
    </Container>
  );
}
