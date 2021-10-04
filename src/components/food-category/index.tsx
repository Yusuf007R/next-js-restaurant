import React, {useContext, useState} from 'react';
import {Container, IconContainer, StyledImage, Text} from './style';
import {categoriesType} from 'src/redux/slices/products-slice';
import {ThemeContext} from 'src/theme/theme-provider';

export default function FoodCategory({name, icon}: categoriesType) {
  const themeContext = useContext(ThemeContext);
  const [isPressed, setIsPressed] = useState(false);
  const toggleIsPressed = () => {
    setIsPressed(prev => !prev);
  };

  return (
    <Container isPressed={isPressed} onClick={toggleIsPressed}>
      <IconContainer>
        <StyledImage
          isDark={themeContext.theme === 'dark'}
          width="35%"
          height="35%"
          alt={`${name} icon`}
          src={icon}></StyledImage>
      </IconContainer>
      <Text>{name}</Text>
    </Container>
  );
}
