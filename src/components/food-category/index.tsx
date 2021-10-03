import React, {useState} from 'react';
import {Container, IconContainer, Text} from './style';
import Image from 'next/image';

type PropsType = {
  id: number;
  name: string;
  icon: string;
};

export default function FoodCategory({name, icon}: PropsType) {
  const [isPressed, setIsPressed] = useState(false);
  const toggleIsPressed = () => {
    setIsPressed(prev => !prev);
  };

  return (
    <Container isPressed={isPressed} onClick={toggleIsPressed}>
      <IconContainer>
        <Image width="35%" height="35%" alt={`${name} icon`} src={icon}></Image>
      </IconContainer>
      <Text>{name}</Text>
    </Container>
  );
}
