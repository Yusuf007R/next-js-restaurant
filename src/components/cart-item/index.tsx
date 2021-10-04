import React from 'react';
import {
  Container,
  ImageContainer,
  Input,
  PriceContainer,
  RemoveText,
  Text,
  TextContainer,
} from './style';
import Image from 'next/image';
import {useStoreDispatch} from 'src/redux/store';
import {changeQuantity, removeProduct} from 'src/redux/slices/cart-slice';
import {productsType} from 'src/redux/slices/products-slice';

type propsType = {
  product: productsType;
  quantity: number;
};

export default function CartItem({
  product: {image, name, price, id},
  quantity,
}: propsType) {
  const dispatch = useStoreDispatch();
  const handleClick = () => {
    dispatch(removeProduct(id));
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(event.target.value);
    if (isNaN(value)) {
      value = 0;
    }
    dispatch(changeQuantity({id, quantity: value}));
  };
  return (
    <Container>
      <ImageContainer>
        <Image
          alt="temp"
          src={image}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </ImageContainer>
      <TextContainer>
        <Input
          value={quantity.toString()}
          type="number"
          onChange={handleInput}
        />
        <Text>x</Text>
        <Text>{name}</Text>
      </TextContainer>
      <PriceContainer>
        <Text isAlternativeColor>
          ${Math.round(price * quantity * 100) / 100}
        </Text>
        <RemoveText onClick={handleClick}>remove</RemoveText>
      </PriceContainer>
    </Container>
  );
}
