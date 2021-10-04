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
import {useStoreDispatch} from 'src/redux/store';
import {addProduct} from 'src/redux/slices/cart-slice';
import {productsType} from 'src/redux/slices/products-slice';
import {theme} from 'twin.macro';

export default function FoodItem(product: productsType) {
  const {image, name, price, qualification, time} = product;
  const [priceRepresentation, setPriceRepresentation] = useState('');
  const dispatch = useStoreDispatch();
  useEffect(() => {
    const stringPrice = Math.trunc(price).toString();
    setPriceRepresentation('$'.repeat(stringPrice.length));
  }, [price]);

  const handleClick = () => {
    dispatch(addProduct(product));
  };

  return (
    <Container onClick={handleClick}>
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
          <StyledStarIcon
            fill={theme`textColor.primary`}
            height="35%"
            tw="mr-1.5"
          />
          <Text>{qualification}</Text>
          <Text isAlternativeColor>Coffee</Text>
          <Text isAlternativeColor>SandWich</Text>
          <Text isAlternativeColor>{priceRepresentation}</Text>
        </RowContainer>
      </DetailContainer>
    </Container>
  );
}
