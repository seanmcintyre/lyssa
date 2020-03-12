import styled, { css, keyframes } from 'styled-components';

import { grayscale, slate } from '../../color';
import { rgba } from 'polished';

export const Action = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.5rem;
  border: 0;
  background: transparent;

  &:focus {
    outline: none;
  }

  > svg {
    width: 1.125rem;
    height: 1.125rem;

    * {
      fill: ${({ theme }) => rgba(theme.content.color, 0.667)};
    }
  }
`;

export const Toggle = styled.div<{ open?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0.5rem;
  left: -0.5rem;
  transition: 120ms ease-in-out;

  transform: ${p => (p.open ? 'rotate(0deg)' : 'rotate(-90deg)')};

  &:focus {
    outline: none;
  }

  > svg {
    * {
      fill: ${({ theme }) => theme.content.color};
    }
  }
`;

export const Header = styled.div`
  display: block;
  padding: 0.5rem 1.25rem;
  margin: 0.2rem 0 0;
  color: ${p => rgba(p.theme.content.color, 0.5)};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.025rem;
`;

const fade = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.99) translateX(-0.25rem);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
`;

export const Wrapper = styled.div<{
  active?: boolean;
  $height?: number;
}>`
  border-radius: 0.2rem;
  position: relative;
  background: ${({ active, theme }) =>
    active && rgba(theme.content.color, 0.0175)};

  &:hover {
    background: ${({ theme }) => rgba(theme.content.color, 0.025)};
  }

  ${p =>
    p.$height &&
    css`
      transition: 230ms ease-in-out;
      height: ${(p.$height + 1) * 2.5 + 0.25}rem;
    `}

  > svg {
    width: 1.125rem;
    height: 1.125rem;
    margin: 0 0.5rem 0 0;
    display: inline-block;

    * {
      fill: ${({ theme }) => rgba(theme.content.color, 0.667)};
    }
  }
`;

export const ItemStyled = styled.button`
  padding: 0.5rem 1.25rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  line-height: 1.5rem;
  border-radius: 0.2rem;
  font-size: 0.875rem;
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.content.color};
  border: 0;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => rgba(theme.content.color, 0.05)};
  }

  &:focus {
    outline: none;
  }

  > svg {
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 1rem;

    * {
      fill: ${({ theme }) => rgba(theme.content.color, 0.667)};
    }
  }
`;

export const MenuStyled = styled.div`
  display: block;
  width: 20rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.content.color};
  background: ${({ theme }) =>
    theme.name === 'dark' ? grayscale(970) : slate(30)};
`;

export const SubMenu = styled.div`
  width: 100%;
  padding-top: 0.25rem;

  > div {
    animation: ${fade} 140ms ease-in-out both;

    ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
      i => css`
        &:nth-child(${i}) {
          animation-delay: ${i * 60}ms;
        }
      `,
    )};
  }
`;