import styled from 'styled-components';
import { getComputedMediaStyle, getStyle } from './getStyle';

export const Layout = styled.div`
  ${getStyle}
  ${(props) => {
    return getComputedMediaStyle('xs', props);
  }}
  /* @todo: get breakpoint from theme */
  @media (min-width: 375px) {
    ${(props) => {
      if (props['orientation-gt-xs'] || props['align-gt-xs']) {
        return getComputedMediaStyle('gt-xs', props);
      }
      return ``;
    }}
  }
  @media (min-width: 768px) {
    ${(props) => {
      if (props['orientation-md'] || props['align-md']) {
        return getComputedMediaStyle('md', props);
      }
      return ``;
    }}
  }
  @media (min-width: 768px) {
    ${(props) => {
      if (props['orientation-gt-md'] || props['align-gt-md']) {
        return getComputedMediaStyle('gt-md', props);
      }
      return ``;
    }}
  }
  @media (min-width: 1440px) {
    ${(props) => {
      if (props['orientation-lg'] || props['align-lg']) {
        return getComputedMediaStyle('lg', props);
      }
      return ``;
    }}
  }
  @media (min-width: 1440px) {
    ${(props) => {
      if (props['orientation-gt-lg'] || props['align-gt-lg']) {
        return getComputedMediaStyle('gt-lg', props);
      }
      return ``;
    }}
  }
`;
