import tw from "twin.macro";
import styled from "styled-components";

type textType={
  isAlternativeColor?:boolean
}

export const Container = tw.div`flex w-full h-16 justify-between items-center mb-8`;


export const ImageContainer = tw.div`w-24 h-full rounded-xl overflow-hidden`;

export const Text = styled.p<textType>`
${tw`break-words m-1`};
${({isAlternativeColor})=>isAlternativeColor? tw`text-gray-500` : tw`text-black`};
`
export const TextContainer = tw.div`flex items-center`


export const RemoveText = tw.div`text-sm text-black hover:cursor-pointer w-full text-center underline`