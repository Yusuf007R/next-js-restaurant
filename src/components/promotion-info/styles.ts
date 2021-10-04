import styled from "styled-components";
import tw from "twin.macro";

type smallTextType={
  isVariant?:boolean
}

export const Container = tw.div`flex w-full bg-orange items-center bg-opacity-10 justify-between pt-4 rounded-2xl flex-col sm:(flex-row pt-0)   `

export const LeftContainer = tw.div`
w-1/3
hidden
h-40
relative
sm:block
md:h-48
xl:h-60
2xl:h-72
`

export const CenterContainer = tw.div`
flex
w-full
h-20
justify-center
items-center
flex-col
sm:(w-1/3 h-40)
md:h-48
xl:h-60 
2xl:h-72
`

export const RightContainer = tw.div`flex h-20 w-full items-end justify-end justify-self-end pb-8 pr-8 sm:(w-1/3 h-40) md:h-48 xl:h-60 2xl:h-72`

export const Text = tw.p`text-xl text-center font-bold text-orange xl:text-3xl`

export const SmallText = styled.p<smallTextType>`${tw`text-xs font-bold text-center lg:text-base`};
${({isVariant})=>isVariant? tw`text-orange`:tw`text-secondary`}
`