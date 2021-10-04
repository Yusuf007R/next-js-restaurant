import React from 'react';
import {
  Container,
  ImageContainer,
  RemoveText,
  Text,
  TextContainer,
} from './style';
import Image from 'next/image';

export default function CartItem() {
  return (
    <Container>
      <ImageContainer>
        <Image
          alt="temp"
          src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </ImageContainer>
      <TextContainer>
        <Text>1</Text>
        <Text>x</Text>
        <Text>Beach BBQBurger</Text>
      </TextContainer>
      <div>
        <Text isAlternativeColor>$14.99</Text>
        <RemoveText>remove</RemoveText>
      </div>
    </Container>
  );
}
