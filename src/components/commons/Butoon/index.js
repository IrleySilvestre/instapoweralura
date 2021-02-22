import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../components/foundation/Text'
import { propsToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent; 
`;

const ButtonDefault = css`
  color: white;
  background-color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.color`)
  }};
  color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.contrastText`)
  }};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  ${TextStyleVariants.smallestException}
  ${function (props) {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault
  }}
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${(props) => props.theme.borderRadius};
  &:hover,
  &:focus {
    opacity: .5;
  }
  ${breakpointsMedia({
    xs: css`
      /* All devices */
      ${TextStyleVariants.smallestException}
    `,
    md: css`
     /* From md breakpoint */
     ${TextStyleVariants.paragraph1}
    `,
  })}
  ${propsToStyle('margin')}
  ${propsToStyle('display')}
`;