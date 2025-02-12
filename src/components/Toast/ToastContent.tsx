import React, { useEffect } from 'react';
import { ToastType } from '../../types/toast';
import { removeToast } from '../../core/store';
import ToastCloseIcon from './Icon/Close';
import './toast.css';

const ToastContent = ({
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
    <div className={`toast-item toast-${type} toast-${variants} ${position}`}>
      {custom?.() ?? (
        <span>
          {message?.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </span>
      )}
      {isClosable && (
        <button
          className="toast-close-button"
          onClick={() => removeToast(String(id))}
        >
          <ToastCloseIcon className="toast-close-icon" />
        </button>
      )}
    </div>
  );
};

export default ToastContent;
