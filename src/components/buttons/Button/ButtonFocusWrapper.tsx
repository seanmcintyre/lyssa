import React, { SFC } from 'react';
import styled from 'styled-components';

export const LinkElementStyled = styled.span`
  &:focus,
  a:focus {
    outline: none;
  }
`;

export const ButtonFocusWrapper: SFC<any> = props => (
  <LinkElementStyled>{props.children}</LinkElementStyled>
);