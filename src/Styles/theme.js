import { generateMedia } from 'styled-media-query';
import { breakpoint } from './breakpoints';
import { color } from './colors';

export const defaultTheme = {
  color,
  media: generateMedia(breakpoint),
  font: {
    family: 'Roboto, Helvetica, sans-serif',
    weight: 'normal',
  },
};

export default defaultTheme;
