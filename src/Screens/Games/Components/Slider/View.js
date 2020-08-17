import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { withWheel } from './hocs';
import { items } from './resources/config';
import SliderItem from './SliderItem';
// @todo: see in window width > slides all width
const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
  // responsive: [
  //   {
  //     breakpoint: 450,
  //     settings: {
  //       variableWidth: false,
  //     },
  //   },
  // ],
};

const Wrapper = styled.div`
  padding-top: 20px;
  box-sizing: border-box;
  background-color: #0d0e12;
  height: 380px;
  ${({ theme: { media } }) => media.lessThan('sm')`
    height: 368px;

    .slick-list {
      height: 300px;
    }
  `}

  .slick-dots {
    bottom: -40px;
    ${({ theme: { media } }) => media.lessThan('sm')`
    bottom: -36px;
    `}

    li {
      width: 8px;
      height: 8px;
      margin: 0 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2rem;
      &.slick-active {
        background: #30bf70;
      }
      button:before {
        visibility: hidden;
      }
    }
  }
`;

const BaseSlider = React.forwardRef(({ wrapperRef }, ref) => (
  <Wrapper ref={wrapperRef} itemsCount={items.length}>
    <Slider {...settings} ref={ref}>
      {items.map(SliderItem)}
    </Slider>
  </Wrapper>
));

export const View = () => withWheel(BaseSlider);
