import React from 'react';
import styled from 'styled-components';
import { image01, image02, image03 } from './images';

const TitleInfo = styled.span`
  color: ${(props) => props.color || '#fff'};
`;

const items = [
  {
    title: (
      <>
        How <TitleInfo color={'#30bf70'}>to</TitleInfo> play
      </>
    ),
    description: 'Secured by Blockchain. Audtited. 100% Fair.',
    ctaLink: '/sample',
    ctaText: 'Read more',
    background: { src: image02 },
  },
  {
    title: (
      <>
        How <TitleInfo color={'#f1b244'}>to get BET</TitleInfo>
      </>
    ),
    description: 'No registration, instant play and cash-outs',
    ctaLink: '/sample',
    ctaText: 'Read more',
    background: { src: image03 },
  },
  {
    title: (
      <>
        <TitleInfo color={'#2196f3'}>No deposit</TitleInfo> Casino
      </>
    ),
    description: 'No deposits. Transparent game logic',
    ctaLink: '/sample',
    ctaText: 'Read more',
    background: { src: image01 },
  },
];

export { items };
