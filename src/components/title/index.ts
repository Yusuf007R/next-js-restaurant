import styled from "styled-components";
import tw from "twin.macro";


type titleProps ={
  isBigger?:boolean;
  
}

export const Title = styled.p<titleProps>`${tw`text-2xl text-primary font-bold`};
${({isBigger})=> isBigger ? tw`text-3xl` : tw`text-2xl`};`
