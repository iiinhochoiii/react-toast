import React, { useEffect } from "react";

import { css } from "@emotion/react";

import { ToastType } from "@/types/toast";

import { dispatch } from "@/hooks/use-store";
import { StyledToastItem, StyledModalCloseIcon } from "./toast.styles";

const Toast = ({
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
      <span>
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

export default Toast;
