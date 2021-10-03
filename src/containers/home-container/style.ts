import styled from "styled-components";
import tw from "twin.macro";

export const Container = tw.div`flex w-full items-center justify-center `

export const BodyContainer = tw.div`flex flex-col w-full h-full items-center`

export const CenterContainer = tw.div`flex flex-col w-4/5 h-full items-center justify-center`

export const CartContainer = tw.div`w-96 h-auto`

export const MidContainer = tw.div`grid w-full place-items-center gap-14 my-14 sm:(flex justify-between)`

export const ScrollableContainer = styled.div`${tw` flex overflow-scroll w-full h-auto justify-center`}   
  -ms-overflow-style: none;  
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display:none;
  } 
`
export const FoodCategoriesContainer = tw.div`flex w-max justify-around p-4`

export const FoodContainer = tw.div`grid w-max grid-cols-1 mt-20 gap-8 sm:grid-cols-2 lg:grid-cols-3`


