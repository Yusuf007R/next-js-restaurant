import styled from "styled-components";
import tw from "twin.macro";

type smallTextType={
  isVariant?:boolean
}

export const Container = tw.div`flex w-5/6 h-52 bg-orange bg-opacity-10 rounded-2xl flex-row justify-center 2xl:h-64`

export const LeftContainer = tw.div`
w-1/3
h-full
relative
`

export const CenterContainer = tw.div`
flex
h-full
w-1/2
justify-center
items-center
flex-col
`

export const RightContainer = tw.div`flex h-full w-1/4 items-end justify-end   pb-8`

export const Text = tw.p`text-3xl font-bold text-orange`

export const SmallText = styled.p<smallTextType>`${tw`text-base font-bold text-center  mr-9`};
${({isVariant})=>isVariant? tw`text-orange`:tw`text-secondary`}
`