import React from 'react';
import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const Picture = styled.picture`
  display: block;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const webPRegEx = /\.webp$/;
const notWebP = (a) => a.filter((n) => !webPRegEx.test(n))[0];
const getFileExtension = (filename) => filename.split('.').pop();

const prepareSource = (url, image) => {
  const types = {};
  for (const ratio in image) {
    image[ratio].forEach((filename) => {
      const ext = getFileExtension(filename);
      const type = `image/${ext}`;
      if (!(type in types)) {
        types[type] = [];
      }
      types[`image/${ext}`].push(url + filename + ' ' + ratio);
    });
  }
  const result = [];
  for (const type in types) {
    result.push({ type, srcSet: types[type].join(', ') });
  }
  return result;
};

const getGameImageUrl = ({ url, isLocal, codeName }) => {
  if (isLocal) {
    return '/assets/games/' + codeName;
  }
  return url;
};

function GameCardImage({ game }) {
  let { name, icons, optimizedIcons } = game;
  const url = getGameImageUrl(game);
  name += '-trustbet'; // DPM-770

  if (icons && Object.keys(icons).length !== 0 && !optimizedIcons) {
    return (
      <ImageWrapper>
        <Picture>
          <source srcSet={url + icons['big']} />
          <Image src={url + icons['big']} alt={name} role='presentation' />
        </Picture>
      </ImageWrapper>
    );
  }

  if (optimizedIcons) {
    const { big } = optimizedIcons;

    return (
      <ImageWrapper>
        <Picture>
          {prepareSource(url, big).map((props, index) => (
            <source key={`icon:${name}:big:${index}`} {...props} />
          ))}
          <Image
            src={url + notWebP(big['1x'])}
            alt={name}
            role='presentation'
          />
        </Picture>
      </ImageWrapper>
    );
  }

  // TODO: create null image
  return <></>;
}

export default GameCardImage;
