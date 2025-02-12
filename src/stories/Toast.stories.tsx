import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import Toast from '@/components/Toast/Toast';
import { Position, ToastType } from '@/types/toast';
import { addToast as onToast } from '@/core/store';
import './toast.css';

const meta = {
  title: 'Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Toast>;

export default meta;

export const Default: StoryObj<ToastType> = {
  render: (props) => {
    const handleClick = () => {
      onToast({
        ...props,
      });
    };

    return (
      <div className="toast-story-wrapper">
        <button className="toast-story-button" onClick={handleClick}>
          Toast
        </button>
        <Toast />
      </div>
    );
  },
  args: {
    message: 'This is a toast message',
    type: 'default',
    duration: 3000,
    isClosable: true,
    variants: 'filled',
  },
};

export const Types: StoryFn<ToastType> = () => {
  return (
    <div className="toast-story-wrapper">
      <button
        className="toast-story-button"
        onClick={() =>
          onToast({
            message: 'This is a Default Type toast message',
            type: 'default',
          })
        }
      >
        Default Toast
      </button>
      <button
        className="toast-story-button"
        onClick={() =>
          onToast({
            message: 'This is a Success Type toast message',
            type: 'success',
          })
        }
      >
        Success Toast
      </button>
      <button
        className="toast-story-button"
        onClick={() =>
          onToast({
            message: 'This is an Error Type toast message',
            type: 'error',
          })
        }
      >
        Error Toast
      </button>
      <Toast />
    </div>
  );
};

export const Variants: StoryFn<ToastType> = () => {
  return (
    <div className="toast-story-wrapper">
      <button
        className="toast-story-button"
        onClick={() =>
          onToast({
            message: 'This is a Filled Variant toast message',
            variants: 'filled',
          })
        }
      >
        Filled Toast
      </button>
      <button
        className="toast-story-button"
        onClick={() =>
          onToast({
            message: 'This is an Outlined Variant toast message',
            variants: 'outlined',
          })
        }
      >
        Outlined Toast
      </button>
      <Toast />
    </div>
  );
};

export const Positions: StoryFn<ToastType> = () => {
  const handleClick = (position: Position) => {
    onToast({ message: `This is a ${position} toast message`, position });
  };

  return (
    <div className="toast-story-wrapper toast-story-position-wrapper toast-story-positions">
      <div>
        <div>
          <button
            className="toast-story-button"
            onClick={() => handleClick('top-left')}
          >
            Top-Left Toast
          </button>
          <button
            className="toast-story-button"
            onClick={() => handleClick('top')}
          >
            Top Toast
          </button>
          <button
            className="toast-story-button"
            onClick={() => handleClick('top-right')}
          >
            Top-Right Toast
          </button>
        </div>
        <div>
          <button
            className="toast-story-button"
            onClick={() => handleClick('bottom-left')}
          >
            Bottom-Left Toast
          </button>
          <button
            className="toast-story-button"
            onClick={() => handleClick('bottom')}
          >
            Bottom Toast
          </button>
          <button
            className="toast-story-button"
            onClick={() => handleClick('bottom-right')}
          >
            Bottom-Right Toast
          </button>
        </div>
      </div>
      <Toast />
    </div>
  );
};

export const Custom: StoryObj<ToastType> = {
  render: (props) => {
    const handleClick = () => {
      onToast({ ...props });
    };

    return (
      <div className="toast-story-wrapper">
        <button className="toast-story-button" onClick={handleClick}>
          Custom Toast
        </button>
        <Toast />
      </div>
    );
  },
  args: {
    type: 'default',
    duration: 3000,
    isClosable: true,
    variants: 'filled',
    custom: () => (
      <div>
        <h1>hello</h1>
        <p>this is a custom toast message</p>
      </div>
    ),
  },
};
