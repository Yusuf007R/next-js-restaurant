import React from 'react';
import {
  CenterContainer,
  Container,
  LeftContainer,
  RightContainer,
  SmallText,
  Text,
} from './styles';
import Image from 'next/image';
import personIMG from '../../../public/assets/images/person-img.png';

export default function PromotionInfo() {
  return (
    <Container>
      <LeftContainer>
        <Image
          src={personIMG}
          alt="person img"
          layout="fill"
          objectFit="contain"
        />
      </LeftContainer>
      <CenterContainer>
        <Text>$0 delivery for 30 days! 🎉</Text>
        <SmallText>$0 delivery fee for orders over $10 for 30 days!</SmallText>
      </CenterContainer>
      <RightContainer>
        <SmallText isVariant>{'Learn more -->'}</SmallText>
      </RightContainer>
    </Container>
  );
}
