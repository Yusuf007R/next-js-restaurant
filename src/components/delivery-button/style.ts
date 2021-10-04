import tw from "twin.macro";
import Pointer from '../../../public/assets/icons/pointer-icon.svg';

import ClockIcon from '../../../public/assets/icons/clock-icon.svg';


export const ButtonDiv = tw.div`
flex
justify-evenly
items-center
w-44
h-12
bg-orange
rounded-3xl
hover:cursor-pointer
`



export const StyledPointer = tw(Pointer)`
rotate-90`




export const Text = tw.p`
text-xs
text-white

`