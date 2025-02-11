import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import Toast from '@/components/Toast/Toast';
import { Position, ToastType } from '@/types/toast';
import { addToast as onToast } from '@/core/store';
import { css } from '@emotion/react';

const wrapperStyles = css`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: auto;
    & > div {
      display: flex;
      gap: 20px;

      & > button {
        width: 200px;
      }
    }
  }
`;

const buttonStyles = css`
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  width: 200px;
  background-color: #edf4ff;
`;

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
      <div css={wrapperStyles}>
        <button css={buttonStyles} onClick={handleClick}>
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
    <div css={wrapperStyles}>
      <button
        css={buttonStyles}
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
        css={buttonStyles}
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
        css={buttonStyles}
        onClick={() =>
          onToast({
            message: 'This is a Error Type toast message',
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
    <div css={wrapperStyles}>
      <button
        css={buttonStyles}
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
        css={buttonStyles}
        onClick={() =>
          onToast({
            message: 'This is a Outlined Variant toast message',
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
    onToast({
      message: `This is a ${position} toast message`,
      position: position,
    });
  };

  return (
    <div
      css={[
        wrapperStyles,
        css`
          height: 40vh;
        `,
      ]}
    >
      <div>
        <div>
          <button css={buttonStyles} onClick={() => handleClick('top-left')}>
            Top-Left Toast
          </button>
          <button css={buttonStyles} onClick={() => handleClick('top')}>
            Top Toast
          </button>
          <button css={buttonStyles} onClick={() => handleClick('top-right')}>
            Top-Right Toast
          </button>
        </div>
        <div>
          <button css={buttonStyles} onClick={() => handleClick('bottom-left')}>
            Bottom-Left Toast
          </button>
          <button css={buttonStyles} onClick={() => handleClick('bottom')}>
            Bottom Toast
          </button>
          <button
            css={buttonStyles}
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
      onToast({
        ...props,
      });
    };

    return (
      <div css={wrapperStyles}>
        <button css={buttonStyles} onClick={handleClick}>
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
        <p>this is custom toast message</p>
      </div>
    ),
  },
};
