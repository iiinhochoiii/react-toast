import React from "react";
import ReactDOM from "react-dom";
import { Position, ToastType } from "@/types/toast";
import useStore from "@/hooks/use-store";

import { Wrapper } from "./toast.styles";

import Toast from "./Toast";

const ToastContainer = () => {
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

  return ReactDOM.createPortal(createToastElement(<Toast />), document.body);
};

export default ToastContainer;
