import React, { useEffect } from "react";
import styled from "@emotion/styled";

import { css, keyframes } from "@emotion/react";

import { ToastType } from "@/types/toast";

import Container from "./ToastContainer";
import ToastCloseIcon from "./Icon/Close";
import useStore, { dispatch } from "@/hooks/use-store";

const topAnimation = keyframes({
  "0%": {
    transform: "translateY(-120%)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

const LeftAnimation = keyframes({
  "0%": {
    transform: "translateX(-120%)",
  },
  "100%": {
    transform: "translateX(0)",
  },
});

const RightAnimation = keyframes({
  "0%": {
    transform: "translateX(120%)",
  },
  "100%": {
    transform: "translateX(0)",
  },
});

const bottomAnimation = keyframes({
  "0%": {
    transform: "translateY(120%)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

const positionAnimation = {
  top: topAnimation,
  "top-left": LeftAnimation,
  "top-right": RightAnimation,
  bottom: bottomAnimation,
  "bottom-left": LeftAnimation,
  "bottom-right": RightAnimation,
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

const StyledToastItem = styled.div<
  Pick<ToastType, "type" | "variants" | "position">
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

const StyledModalCloseIcon = styled(ToastCloseIcon)<{ variant?: string }>`
  ${({ variant }) =>
    variant === "outlined"
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
  "top-left": css`
    top: 20px;
    left: 20px;
  `,
  "top-right": css`
    top: 20px;
    right: 20px;
  `,
  bottom: css`
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  `,
  "bottom-left": css`
    bottom: 20px;
    left: 20px;
  `,
  "bottom-right": css`
    right: 20px;
    bottom: 20px;
  `,
};

const Wrapper = styled.div<{ position: Position }>`
  position: fixed;
  z-index: 10000;
  overflow: hidden;
  box-sizing: border-box;

  ${({ position }) => positionStyle[position]};
`;

export type Position =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right";

const ToastItem = ({
  id,
  message,
  duration,
  isClosable,
  type,
  render,
  variants,
  position,
  ...rest
}: ToastType) => {
  const renderToast = () => {
    if (render) {
      return render({ message, id, ...rest });
    }

    return (
      <span
        css={css`
          margin: 0;
          color: inherit;
        `}
      >
        {message?.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </span>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({
        type: "REMOVE_TOAST",
        payload: String(id),
      });
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration]);

  return (
    <StyledToastItem type={type} variants={variants} position={position}>
      {renderToast()}
      {isClosable && (
        <button
          css={css`
            cursor: pointer;

            height: 24px;
            padding: 0;

            background: none;
            border: none;
          `}
          onClick={() =>
            dispatch({
              type: "REMOVE_TOAST",
              payload: String(id),
            })
          }
        >
          <StyledModalCloseIcon variant={variants} />
        </button>
      )}
    </StyledToastItem>
  );
};

const Toast = () => {
  const { toasts } = useStore();

  const groupByToast = toasts.reduce(
    (acc, toast) => {
      if (!toast.position) {
        toast.position = "bottom";
      }

      if (!acc[toast.position]) {
        acc[toast.position] = [];
      }

      acc[toast.position].push(toast);

      return acc;
    },
    {} as Record<Position, ToastType[]>,
  );

  const createToastElement = (children: React.ReactNode) => {
    return (
      <>
        {(Object.keys(groupByToast) as Array<keyof typeof groupByToast>).map(
          (key) => (
            <Wrapper key={key} position={key}>
              {groupByToast[key].map(
                ({
                  id,
                  message = "",
                  type = "default",
                  isClosable = true,
                  duration = 3000,
                  variants = "filled",
                  position = "bottom",
                  ...rest
                }: ToastType) =>
                  React.cloneElement(children as React.ReactElement, {
                    id,
                    message,
                    type,
                    isClosable,
                    duration,
                    variants,
                    position,
                    key: id,
                    ...rest,
                  }),
              )}
            </Wrapper>
          ),
        )}
      </>
    );
  };

  return <Container createElement={createToastElement(<ToastItem />)} />;
};

export default Toast;
