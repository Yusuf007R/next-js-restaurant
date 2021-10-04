import React from 'react';
import {ButtonDiv, StyledPointer, Text} from './style';
import ClockIcon from '../../../public/assets/icons/clock-icon.svg';

export default function DeliveryButton() {
  return (
    <ButtonDiv>
      <ClockIcon fill="white" height="40%"></ClockIcon>
      <Text>
        Delivery <b>Now</b>
      </Text>
      <StyledPointer fill="white" height="40%"></StyledPointer>
    </ButtonDiv>
  );
}
