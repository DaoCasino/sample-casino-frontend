import React from 'react';
import styled from 'styled-components';
import MoveAnimation from '../MoveAnimation';
import cs from './assets/images';

const Wrapper = styled.div`
  height: 312px;
  background: linear-gradient(180deg, #242e42 0%, #1c222f 100%);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
`;

const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;

  bottom: 45px;
  width: 100%;
  text-align: center;
  position: absolute;
  color: #fff;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: -20%;
  left: -10%;
  width: 120%;
  height: 120%;
`;

const setToString = (set) => {
  const s = [];
  for (const n in set) {
    s.push(n !== '1x' ? set[n] + ' ' + n : set[n]);
  }
  return s.join(', ');
};

function ComingSoonImage({ image }) {
  return (
    <ImageWrapper>
      <picture>
        {Object.keys(image).map((type, index) => (
          <source
            key={`image:${type}:${index}`}
            srcSet={setToString(image[type])}
            type={type}
          />
        ))}
        <Image src={image['image/png']['1x']} alt='' role='presentation' />
      </picture>
    </ImageWrapper>
  );
}

function ComingSoon() {
  return (
    <MoveAnimation>
      <Wrapper>
        <ComingSoonImage image={cs} />
        <Title>Coming Soon</Title>
      </Wrapper>
    </MoveAnimation>
  );
}

export default ComingSoon;
