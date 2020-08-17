import { css } from 'styled-components';

const getAlign = (key = 'start stretch') => {
  const [justifyKey, alignKey] = key.split(' ');
  const common = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
  };
  const justify = {
    ...common,
    'space-around': 'space-around',
    'space-between': 'space-between',
  };
  const align = {
    ...common,
    stretch: 'stretch',
  };
  const textAlign = {
    center: 'center',
    start: 'start',
    end: 'end',
    stretch: 'justify',
  };
  return css`
    justify-content: ${justify[justifyKey]};
    align-items: ${align[alignKey]};
    text-align: ${textAlign[alignKey]};
  `;
};

const getOrientation = (key = 'row') => {
  const orientation = {
    row: 'row',
    column: 'column',
  };
  return css`
    flex-direction: ${orientation[key]};
  `;
};

const getFlex = (value = 1) =>
  css`
    flex: ${value};
  `;

const getDisplay = (hide) =>
  css`
    display: ${hide ? 'none' : 'flex'};
  `;

// // @todo make list structure
// const breakpoints = {
//   xs: 375,
//   'gt-xs': 375,
//   md: 768,
//   'gt-md': 768,
//   lg: 1440,
//   'gt-lg': 1440,
// };

const defaultStyle = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  text-align: start;
  overflow: hidden;
`;

const getComputedStyle = (props) => {
  const common = `
    flex-direction: ${props.orientation};
  `;
  if (props.fill) {
    return css`
      ${common}
      height: 100%;
      width: 100%;
    `;
  }
  return css`
    ${common}
  `;
};

export const getComputedMediaStyle = (breakpoint, props) => {
  const literal = {
    orientation: `orientation-${breakpoint}`,
    align: `align-${breakpoint}`,
    flex: `flex-${breakpoint}`,
    hide: `hide-${breakpoint}`,
    show: `show-${breakpoint}`,
  };
  // @todo has bug -> create cascade
  const orientationKey = props[literal.orientation] || props.orientation;
  const alignKey = props[literal.align] || props.align;
  const flexValue = props[literal.flex] || props.flex;
  const hideKey = props[literal.hide] || props.hide;
  const showKey = props[literal.show] || props.show;
  const hidden = (showKey ? false : true) && (hideKey ? true : false);
  const style = css`
  ${getOrientation(orientationKey)}
  ${getAlign(alignKey)}
  ${getFlex(flexValue)}
  ${getDisplay(hidden)}
`;
  return style;
};

export const getStyle = css`
  ${defaultStyle}
  ${getComputedStyle}
  flex-basis: auto !important;
`;
