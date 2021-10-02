import React from 'react';
import Header from '@/components/header';
import type {NextPage} from 'next';
import PromotionInfo from '@/components/promotion-info';
import tw from 'twin.macro';

const Home: NextPage = () => {
  return (
    <div tw="flex w-4/5 flex-col items-center">
      <Header></Header>
      <PromotionInfo></PromotionInfo>
    </div>
  );
};

export default Home;
