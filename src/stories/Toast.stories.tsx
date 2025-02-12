import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import Toast from '../components/Toast/Toast';
import { Position, ToastType } from '../types/toast';
import { addToast as onToast } from '../core/store';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  &.position-wrapper {
    height: 40vh;
  }

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

const Button = styled.button`
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
      <Wrapper>
        <Button onClick={handleClick}>Toast</Button>
        <Toast />
      </Wrapper>
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
    <Wrapper>
      <Button
        onClick={() =>
          onToast({
            message: 'This is a Default Type toast message',
            type: 'default',
          })
        }
      >
        Default Toast
      </Button>
      <Button
        onClick={() =>
          onToast({
            message: 'This is a Success Type toast message',
            type: 'success',
          })
        }
      >
        Success Toast
      </Button>
      <Button
        onClick={() =>
          onToast({
            message: 'This is a Error Type toast message',
            type: 'error',
          })
        }
      >
        Error Toast
      </Button>
      <Toast />
    </Wrapper>
  );
};

export const Variants: StoryFn<ToastType> = () => {
  return (
    <Wrapper>
      <Button
        onClick={() =>
          onToast({
            message: 'This is a Filled Variant toast message',
            variants: 'filled',
          })
        }
      >
        Filled Toast
      </Button>
      <Button
        onClick={() =>
          onToast({
            message: 'This is a Outlined Variant toast message',
            variants: 'outlined',
          })
        }
      >
        Outlined Toast
      </Button>
      <Toast />
    </Wrapper>
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
    <Wrapper className="position-wrapper">
      <div>
        <div>
          <Button onClick={() => handleClick('top-left')}>
            Top-Left Toast
          </Button>
          <Button onClick={() => handleClick('top')}>Top Toast</Button>
          <Button onClick={() => handleClick('top-right')}>
            Top-Right Toast
          </Button>
        </div>
        <div>
          <Button onClick={() => handleClick('bottom-left')}>
            Bottom-Left Toast
          </Button>
          <Button onClick={() => handleClick('bottom')}>Bottom Toast</Button>
          <Button onClick={() => handleClick('bottom-right')}>
            Bottom-Right Toast
          </Button>
        </div>
      </div>
      <Toast />
    </Wrapper>
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
      <Wrapper>
        <Button onClick={handleClick}>Custom Toast</Button>
        <Toast />
      </Wrapper>
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
