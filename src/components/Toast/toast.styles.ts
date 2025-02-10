import { ToastType, Position } from '@/types/toast';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import ToastCloseIcon from './Icon/Close';

const topAnimation = keyframes({
  '0%': {
    transform: 'translateY(-120%)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

const LeftAnimation = keyframes({
  '0%': {
    transform: 'translateX(-120%)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
});

const RightAnimation = keyframes({
  '0%': {
    transform: 'translateX(120%)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
});

const bottomAnimation = keyframes({
  '0%': {
    transform: 'translateY(120%)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

const positionAnimation = {
  top: topAnimation,
  'top-left': LeftAnimation,
  'top-right': RightAnimation,
  bottom: bottomAnimation,
  'bottom-left': LeftAnimation,
  'bottom-right': RightAnimation,
};

const toastStyle = {
  type: {
    success: css`
      --main-color: #ffffff;
      --main-background: #55a0ee;
    `,
    error: css`
      --main-color: #ffffff;
      --main-background: #c9162b;
    `,
    default: css`
      --main-color: #ffffff;
      --main-background: #343a40;
    `,
  },
  variants: {
    filled: css`
      color: var(--main-color);
      background: var(--main-background);
    `,
    outlined: css`
      color: var(--main-background);
      background: #fff;
      border: 1px solid var(--main-background);
    `,
  },
};

export const StyledToastItem = styled.div<
  Pick<ToastType, 'type' | 'variants' | 'position'>
>`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  box-sizing: content-box;
  min-width: 320px;
  max-width: 640px;
  min-height: 24px;
  margin-bottom: 8px;
  padding: 16px;

  border-radius: 8px;

  ${({ type }) => type && toastStyle.type[type]}
  ${({ variants }) => variants && toastStyle.variants[variants]}
  ${({ position }) =>
    position &&
    css`
      animation: ${positionAnimation[position]} 0.3s forwards;
    `}
`;

export const StyledCloseButton = styled.button`
  height: 24px;
  padding: 0;
  background: none;
  border: none;
`;

export const StyledModalCloseIcon = styled(ToastCloseIcon)<{
  variant?: string;
}>`
  ${({ variant }) =>
    variant === 'outlined'
      ? css`
          > path {
            fill: var(--main-background);
          }
        `
      : css`
          > path {
            fill: var(--main-color);
          }
        `}
`;

const positionStyle = {
  top: css`
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  `,
  'top-left': css`
    top: 20px;
    left: 20px;
  `,
  'top-right': css`
    top: 20px;
    right: 20px;
  `,
  bottom: css`
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  `,
  'bottom-left': css`
    bottom: 20px;
    left: 20px;
  `,
  'bottom-right': css`
    right: 20px;
    bottom: 20px;
  `,
};

export const Wrapper = styled.div<{ position: Position }>`
  position: fixed;
  z-index: 10000;
  overflow: hidden;
  box-sizing: border-box;

  ${({ position }) => positionStyle[position]};
`;
