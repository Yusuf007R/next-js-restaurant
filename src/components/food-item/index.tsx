import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {
  Container,
  DetailContainer,
  ImageContainer,
  RowContainer,
  StyledStarIcon,
  Text,
  TimeContainer,
  TimeText,
  Title,
} from './style';

type propType = {
  id: number;
  name: string;
  qualification: number;
  time: string;
  price: number;
  image: string;
};

export default function FoodItem({
  image,
  name,
  qualification,
  time,
  price,
}: propType) {
  const [priceRepresentation, setPriceRepresentation] = useState('');
  useEffect(() => {
    const stringPrice = Math.trunc(price).toString();
    setPriceRepresentation('$'.repeat(stringPrice.length));
  }, [price]);
  return (
    <Container>
      <ImageContainer>
        <Image
          layout="fill"
          src={image}
          alt={`${name} image`}
          objectFit="cover"
        />
        <TimeContainer>
          <TimeText>
            <b>{time}</b> min
          </TimeText>
        </TimeContainer>
      </ImageContainer>
      <DetailContainer>
        <RowContainer>
          <Title>{name}</Title>
        </RowContainer>
        <RowContainer>
          <StyledStarIcon height="35%" tw="mr-1.5" />
          <Text>{qualification}</Text>
          <Text isAlternativeColor>Coffee</Text>
          <Text isAlternativeColor>SandWich</Text>
          <Text isAlternativeColor>{priceRepresentation}</Text>
        </RowContainer>
      </DetailContainer>
    </Container>
  );
}
