import React from 'react';
import images from './assets/images';
import seo from 'Config/Seo';

const site = seo.title.toLowerCase();

export default [
  {
    image: images.step1,
    title: 'Register in DAOWallet',
    description: (
      <>
        Welcome to {site}! To start playing you need to complete a simple
        onboarding process.
        <br />
        First, you need a DAOWallet account (decentralized wallet for iGaming).
        <br />
        You&apos;ll be redirected to DAOWallet where you can open a free
        account. It will be used as a login for {site}
      </>
    ),
  },
  {
    image: images.step2,
    title: 'Buy BET token',
    description: `Next step is to get some BET tokens that are used for placing bets in ${site}. You can buy BETs right inside DAOWallet via credit card or crypto. It's super simple.`,
  },
  {
    image: images.step3,
    title: 'Enjoy games',
    description: `Last step is to press the back button to ${site} and enjoy 100% on-chain games in the safest casino!`,
  },
];
