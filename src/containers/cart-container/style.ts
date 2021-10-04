import tw from "twin.macro";


export const Container = tw.div`flex w-full pb-10 flex-col items-center`
 
export const BodyContainer = tw.div`w-4/5 h-auto`

export const HeaderContainer = tw.div`flex w-full h-16 justify-between items-center py-10 `

export const IconContainer = tw.div`w-5 h-5 relative mr-8 hover:cursor-pointer`

export const ItemCount = tw.div`flex w-11 h-11 items-center justify-center bg-yellow rounded-2xl text-black font-bold hover:cursor-pointer`

export const CloseButton = tw.div`flex w-11 h-11 items-center justify-center text-2xl font-bold hover:cursor-pointer`

export const HeaderItemsGroup = tw.div`flex flex-row items-center`

export const Text = tw.p`
text-2xl
text-primary
`
export const TotalContainer = tw.div`flex w-full  flex-row justify-between mt-10 mb-4 `

export const BottomContainer = tw.div`w-full h-20 flex flex-row justify-end items-center pt-10 `

export const SmallText = tw.div`text-primary text-sm`