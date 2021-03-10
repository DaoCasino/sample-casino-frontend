import React from 'react';
import PropTypes from 'prop-types';

const setToString = (set) => {
  const s = [];
  for (const n in set) {
    s.push(n !== '1x' ? set[n] + ' ' + n : set[n]);
  }
  return s.join(', ');
};

export const getSmallImage = (image) => image['image/png']['1x'];

function SourceSet({ id, image, media }) {
  return Object.keys(image).map((type, index) => (
    <source
      key={`${id}:image:${type}:${index}`}
      srcSet={setToString(image[type])}
      type={type}
      media={media}
    />
  ));
}

const imageSizes = {
  '1x': PropTypes.any.isRequired,
  '2x': PropTypes.any,
};

const imageTypes = {
  'image/webp': PropTypes.shape(imageSizes),
  'image/png': PropTypes.shape(imageSizes).isRequired,
};

SourceSet.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.shape(imageTypes).isRequired,
  media: PropTypes.string,
};

export { SourceSet };
