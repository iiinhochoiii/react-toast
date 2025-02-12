import ReactDOM from 'react-dom';
import { Position, ToastType } from '@/types/toast';
import { useToastState } from '@/core/store';
import ToastContent from './ToastContent';
import './toast.css';

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
          <div key={key} className={`toast-wrapper ${key}`}>
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
              }: ToastType) => (
                <ToastContent
                  key={id}
                  id={id}
                  message={message}
                  type={type}
                  isClosable={isClosable}
                  duration={duration}
                  variants={variants}
                  position={position}
                  {...rest}
                />
              )
            )}
          </div>
        )
      )}
    </>,
    document.body
  );
};

export default Toast;
