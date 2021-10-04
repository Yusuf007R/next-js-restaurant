import styled from "styled-components";
import tw, { theme } from "twin.macro";
import Image from 'next/image';


type containerType={
  isPressed:boolean
}

type imageType = {
  isDark?:boolean
}

export const Container = styled.div<containerType>`
${ tw`flex items-center  flex-col w-24 h-44 rounded-full pt-3 shadow-md mr-8 hover:cursor-pointer`}
${({isPressed})=>isPressed? tw`bg-yellow`: tw`bg-secondary`}
`


export const IconContainer = tw.div`flex justify-center items-center w-20 h-20 rounded-full bg-primary mb-4 shadow-md`


export const Text = tw.p`
text-sm 
text-primary
`

export const StyledImage = styled(Image)<imageType>`
  filter:${({isDark})=>isDark? 'invert(1);':' invert(0)'}
`