import { css } from 'styled-components';

import { rem } from './util';

const valuesFor8ptGrid = [0, 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 144, 192, 240];
const prefix = '--theme-space-';

const getSpaceProp = (value) => prefix + value;
const getSpacePropVar = (value) => `var(${getSpaceProp(value)})`;

// spaceCssVariables = `--theme-space-0: 0rem; --theme-space-4: 0.25rem; ...`
const spaceCssVariables = css`
  ${valuesFor8ptGrid.map((value) => `${getSpaceProp(value)}: ${rem(value)};`)}
`;

const paddingProps = css`
  ${({ $padding }) => $padding && `padding: ${getSpacePropVar($padding)};`};
  ${({ $px }) =>
    $px && `padding-left: ${getSpacePropVar($px)};padding-right:${getSpacePropVar($px)};`};
  ${({ $py }) =>
    $py && `padding-top: ${getSpacePropVar($py)};padding-bottom:${getSpacePropVar($py)};`};
  ${({ $pt }) => $pt && `padding-top: ${getSpacePropVar($pt)};`};
  ${({ $pr }) => $pr && `padding-right: ${getSpacePropVar($pr)};`};
  ${({ $pb }) => $pb && `padding-bottom: ${getSpacePropVar($pb)};`};
  ${({ $pl }) => $pl && `padding-left: ${getSpacePropVar($pl)};`};
`;

const marginProps = css`
  ${({ $margin }) => $margin && `margin: ${getSpacePropVar($margin)};`};
  ${({ $mx }) =>
    $mx && `margin-left: ${getSpacePropVar($mx)};margin-right:${getSpacePropVar($mx)};`};
  ${({ $my }) =>
    $my && `margin-top: ${getSpacePropVar($my)};margin-bottom:${getSpacePropVar($my)};`};
  ${({ $mt }) => $mt && `margin-top: ${getSpacePropVar($mt)};`};
  ${({ $mr }) => $mr && `margin-right: ${getSpacePropVar($mr)};`};
  ${({ $mb }) => $mb && `margin-bottom: ${getSpacePropVar($mb)};`};
  ${({ $ml }) => $ml && `margin-left: ${getSpacePropVar($ml)};`};
`;

const space = css`
  ${paddingProps}
  ${marginProps}
`;

export { spaceCssVariables, space };
