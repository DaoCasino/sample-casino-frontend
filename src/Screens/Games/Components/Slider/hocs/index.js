import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Wheel = (BaseComponent) => {
  const wrapperRef = React.createRef();
  const ref = React.createRef();
  const changeSlide = (deltaX) => {
    const { current: slider } = ref;
    if (slider) {
      deltaX > 0 ? slider.slickNext() : slider.slickPrev();
    }
  };
  const handleWheel = (e) => {
    if (e.deltaX) {
      e.preventDefault();
      changeSlide(e.deltaX);
    }
  };
  const attachEvents = (el) => {
    el.addEventListener('wheel', handleWheel);
  };
  const detachEvents = (el) => {
    el.removeEventListener('wheel', handleWheel);
  };
  useEffect(() => {
    const { current: wrapper } = wrapperRef;
    if (!wrapper) {
      return;
    }
    attachEvents(wrapper);
    return () => {
      detachEvents(wrapper);
    };
  });

  return <BaseComponent ref={ref} wrapperRef={wrapperRef} />;
};

export { Wheel as withWheel };
