import tw from "twin.macro";
import styled from "styled-components";

type textProps={
  isYellow?:boolean
  isClickable?:boolean
}

export const Container = tw.div`flex flex-col justify-center items-center w-full h-32 rounded-2xl bg-purple py-4 my-12`;

export const RowContainer = tw.div`flex w-4/5  h-1/2 justify-between items-center`;

export const Text = styled.p<textProps>`
${tw`text-sm`};
${({isYellow})=>isYellow? tw`text-yellow`: tw`text-white`};
${({isClickable})=>isClickable && tw`hover:cursor-pointer`}
`

export const IconContainer = tw.div`flex justify-center items-center w-9 h-9 bg-yellow bg-opacity-10 rounded-xl hover:cursor-pointer`


export const IconTextContainer = tw.div`grid grid-cols-2 w-max items-center`