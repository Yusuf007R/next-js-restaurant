import tw from "twin.macro";
import styled from "styled-components";

type textType={
  isAlternativeColor?:boolean
}

export const Container = tw.div`flex w-full h-16 justify-between items-center mb-8`;


export const ImageContainer = tw.div`w-24 h-full rounded-xl overflow-hidden`;

export const Text = styled.p<textType>`
${tw`m-1 break-normal text-sm`};
${({isAlternativeColor})=>isAlternativeColor? tw`text-secondary` : tw`text-primary`};
`
export const TextContainer = tw.div`flex items-center w-40 justify-start `

export const Input = styled.input`
${tw`w-6 h-6 ml-1.5 border-gray-500 text-black border rounded-md text-center`}
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}`

export const PriceContainer = tw.div`w-12 flex justify-center items-center flex-col` 

export const RemoveText = tw.div`text-sm text-primary hover:cursor-pointer w-full text-center underline`