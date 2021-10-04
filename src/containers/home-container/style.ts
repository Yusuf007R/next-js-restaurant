import styled from "styled-components";
import tw from "twin.macro";

type toggleCartType ={
  isVisible:boolean
}

export const Container = tw.div`flex w-full justify-between `

export const BodyContainer = tw.div`flex flex-col w-full items-center `

export const CenterContainer = tw.div`flex flex-col w-11/12 h-full items-center justify-center`

export const CartContainer = styled.div`
${tw`absolute w-full top-0 right-0 bg-secondary shadow-2xl sm:max-w-cart 2xl:(relative shadow-none bg-secondary)`}
`

export const MidContainer = tw.div`flex w-full justify-between  my-14 sm:(flex justify-between)`

export const ScrollableContainer = styled.div`${tw`flex overflow-scroll w-full h-auto lg:justify-center`}   
  -ms-overflow-style: none;  
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display:none;
  } 
`
export const FoodCategoriesContainer = tw.div`flex w-max justify-around p-10`

export const FoodContainer = tw.div`grid w-max grid-cols-1 mt-20 gap-8 sm:grid-cols-2 lg:grid-cols-3`


