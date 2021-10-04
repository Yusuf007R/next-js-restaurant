import React, {useContext, useState} from 'react';
import {Container, IconContainer, StyledImage, Text} from './style';
import {categoriesType} from 'src/redux/slices/products-slice';
import {ThemeContext} from 'src/theme/theme-provider';
import {theme} from 'twin.macro';

export default function FoodCategory({name, icon}: categoriesType) {
  const themeContext = useContext(ThemeContext);
  const isPressed = name === 'All';
  return (
    <Container isPressed={isPressed}>
      <IconContainer>
        <StyledImage
          isDark={themeContext.theme === 'dark'}
          width="35%"
          height="35%"
          alt={`${name} icon`}
          src={icon}></StyledImage>
      </IconContainer>
      <Text
        color={isPressed ? theme`textColor.black` : theme`textColor.primary`}>
        {name}
      </Text>
    </Container>
  );
}
