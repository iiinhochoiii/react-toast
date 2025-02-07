import React, { useEffect } from "react";

import { css } from "@emotion/react";

import { ToastType } from "@/types/toast";

import { removeToast } from "@/core/store";
import { StyledToastItem, StyledModalCloseIcon } from "./toast.styles";

const Toast = ({
  id,
  message,
  duration,
  isClosable,
  type,
  custom,
  variants,
  position,
}: ToastType) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(String(id));
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration]);

  return (
    <StyledToastItem type={type} variants={variants} position={position}>
      {custom?.() ?? (
        <span>
          {message?.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </span>
      )}
      {isClosable && (
        <button
          css={css`
            height: 24px;
            padding: 0;

            background: none;
            border: none;
          `}
          onClick={() => removeToast(String(id))}
        >
          <StyledModalCloseIcon variant={variants} />
        </button>
      )}
    </StyledToastItem>
  );
};

export default Toast;
