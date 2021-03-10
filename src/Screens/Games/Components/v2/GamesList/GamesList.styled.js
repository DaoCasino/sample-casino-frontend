import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;

  ${({ theme: { media } }) => media.greaterThan('xs_gt')`
    grid-gap: 24px;
  `}
`;

export const Item = styled.div`
  grid-column: auto / span 12;

  ${({ theme: { media } }) => media.greaterThan('xs_gt')`
    grid-column: auto / span 6;
  `}

  ${({ theme: { media } }) => media.greaterThan('sm_gt')`
    grid-column: auto / span 4;
  `}
`;
