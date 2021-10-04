import React from 'react';
import {
  Container,
  IconContainer,
  IconTextContainer,
  RowContainer,
  Text,
} from './style';
import ClockIcon from '../../../public/assets/icons/clock-icon.svg';
import {theme} from 'twin.macro';

export default function CartDirection() {
  return (
    <Container>
      <RowContainer>
        <Text>625 St Marks ave</Text>
        <Text isYellow isClickable>
          Edit
        </Text>
      </RowContainer>
      <RowContainer>
        <IconTextContainer>
          <IconContainer>
            <ClockIcon
              fill={theme`colors.yellow`}
              width="50%"
              height="50%"></ClockIcon>
          </IconContainer>
          <Text>35 min</Text>
        </IconTextContainer>
        <Text isYellow isClickable>
          Choose time
        </Text>
      </RowContainer>
    </Container>
  );
}
