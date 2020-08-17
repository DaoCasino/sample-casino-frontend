const getBackgroundSize = ({ bgImg }) =>
  `cover${
    bgImg ? `, ${'opacity' in bgImg ? '100%, ' : ''} ${bgImg.width}px auto` : ''
  }`;

export default getBackgroundSize;
