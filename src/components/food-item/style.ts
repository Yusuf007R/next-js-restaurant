import styled from "styled-components";
import tw, { theme } from "twin.macro";
import StarIcon from '../../../public/assets/icons/star-icon.svg';


type textProps ={
  isAlternativeColor?:boolean;
  color?:string;
}

export const Container = tw.div`flex flex-col h-64 w-80 hover:cursor-pointer transform transition duration-300 hover:scale-105 `

export const ImageContainer = tw.div`w-full h-2/3 rounded-3xl relative overflow-hidden`

export const TimeContainer = tw.div`flex items-center justify-center absolute  left-0 bottom-0 w-24 h-10 rounded-tr-xl bg-secondary`

export const TimeText = tw.p`text-sm text-primary`

export const Title = tw.p`text-lg font-semibold text-primary`

export const DetailContainer = tw.div`w-full h-1/3 mt-4`;

export const RowContainer = tw.div`flex w-full h-1/2 items-center`;

export const Text = styled.p<textProps>`
${tw`text-sm mr-5 `};
${({isAlternativeColor})=> isAlternativeColor? tw`text-gray-400`:tw`text-primary`}
`


export const StyledStarIcon = tw(StarIcon)`
mr-1.5
mb-0.5
`