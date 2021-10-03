import styled from "styled-components";
import tw from "twin.macro";

type containerType={
  isPressed:boolean
}

export const Container = styled.div<containerType>`
${ tw`flex items-center  flex-col w-24 h-44 rounded-full pt-3 shadow-md mr-8`}
${({isPressed})=>isPressed? tw`bg-yellow`: tw`bg-secondary`}
`


export const IconContainer = tw.div`flex justify-center items-center w-20 h-20 rounded-full bg-white mb-4 shadow-md`


export const Text = tw.p`
text-sm 
text-black

`