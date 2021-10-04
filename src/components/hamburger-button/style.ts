import styled from 'styled-components';
import tw, { theme } from 'twin.macro';

export const Container = tw.div`w-7 h-4 flex flex-col items-center justify-around hover:cursor-pointer`;
 

export const Stripe = styled.div`${tw`w-4/5 h-0.5`}
  background-color:${theme`textColor.primary`};
 `;