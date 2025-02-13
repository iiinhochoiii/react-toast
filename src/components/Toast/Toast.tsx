import React from 'react';
import ReactDOM from 'react-dom';
import { Position, ToastType } from '../../types/toast';
import { useToastState } from '../../store/toastStore';

import { Wrapper } from './Toast.styles';

import ToastContent from './ToastContent';

const Toast = () => {
  const toasts = useToastState();

  const groupByToast = toasts.reduce(
    (acc, toast) => {
      const position = toast.position ?? 'bottom';
      (acc[position] ??= []).push(toast);
      return acc;
    },
    {} as Record<Position, ToastType[]>
  );

  return ReactDOM.createPortal(
    <>
      {(Object.keys(groupByToast) as Array<keyof typeof groupByToast>).map(
        (key) => (
          <Wrapper key={key} position={key}>
            {groupByToast[key].map(
              ({
                id,
                message = '',
                type = 'default',
                isClosable = true,
                duration = 3000,
                variants = 'filled',
                position = 'bottom',
                ...rest
              }: ToastType) =>
                React.cloneElement((<ToastContent />) as React.ReactElement, {
                  id,
                  message,
                  type,
                  isClosable,
                  duration,
                  variants,
                  position,
                  key: id,
                  ...rest,
                })
            )}
          </Wrapper>
        )
      )}
    </>,
    document.body
  );
};

export default Toast;
