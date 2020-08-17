const opacityGradient = (opacity) =>
  opacity
    ? `linear-gradient(rgba(12,13,16,${opacity}), rgba(12,13,16,${opacity})), `
    : '';

const getBackground = ({
  bgImg,
  background = 'linear-gradient(to top, #16191f, rgba(22, 25, 31, 0))',
}) => `${
  background && background.src
    ? `center / cover no-repeat url(${background.src})`
    : background
}
  ${
    bgImg
      ? `, ${opacityGradient(bgImg.opacity)} url(${bgImg.src}) no-repeat ${
          bgImg.left || 'center'
        } ${bgImg.top || '16'}px`
      : ''
  } `;

export default getBackground;
