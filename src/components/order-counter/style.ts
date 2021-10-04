import styled from "styled-components";
import tw from "twin.macro";

export const Container = tw.div`w-32 h-8 flex flex-row justify-between rounded-lg border-2 border-gray-200`

export const Button = tw.div`w-1/3 h-full flex justify-center items-center hover:cursor-pointer`

export const Input = styled.input`
${tw`w-1/3 focus:outline-none border-r-2 border-l-2
border-gray-300 text-center focus:shadow-inner`}
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

`