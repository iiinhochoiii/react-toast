
# @choi-ui/react-toast

This package provides easy access to toast messages in React applications.

<br />

## Installation

```
- npm
$ npm insatll @choi-ui/react-toast

- pnpm
$ pnpm add @choi-ui/react-toast
```

## Usage

```jsx
import Toast, { onToast } from '@choi-ui/react-toast';

cosnt App = () => {
  const handleClick = () => {
    onToast({
      message: 'hello toast!',
    });
  };

  return (
    <div>
        <button onClick={onToast}>toast</button>
        <Toast />
    </div>
  );
}
```

## Storybook Documentation
It will be helpful to refer to the [storybook](http://react-toast-storybook.vercel.app/) when using it.

<br />

## Description

It is recommended to declare the `<Toast />` component in the top-level component.
ex. *App.tsx*

> If you declare it in the top-level component, you don't need to add it to each component where toast is used.

### Props

The props of the `onToast` function, which is the event used when generating a toast, are as follows.

| props       | type                                                                                          | default       | description
|-------------|-----------------------------------------------------------------------------------------------|---------------|-----------------------------------------------------------|
| message     | string                                                                                        |               | displayed message                                         |
| type        | `success` \| `error` \| `default`                                                             | `default`     | Colors by toast type                                      |
| duration    | number                                                                                        | 3000          | Toast Duration (ms)                                       |
| position    | `top` \| `top-right` \| `top-left` \| `bottom` \| `bottom-right` \| `bottom-left` | `bottom`  | `bottom`      | Toast display position                                    |
| isClosable  | boolean                                                                                       | `true`        | Whether to display the close button                       |
| variants    | `filled` \| `outlined`                                                                        | `filled`      | `filled` has a solid background, `outlined` has a border  |
| custom      | `React.ReactNode`                                                                             |               | Customize toast content                                   |

## Note

In onToast's props, `custom` values ​​are designed to have priority over `message` values.

<br />
For example, if message and custom are configured together in props, custom will have priority and message will be skipped.

```jsx
import Toast, { onToast } from '@choi-ui/react-toast';

cosnt App = () => {
  const handleClick = () => {
    onToast({
      message: 'simple message', // Skip
      custom: () => <div>
        <h1>Hello</h1>
        <p>this is custom toast message</p>
      </div>
    });
  };

  return (
    <div>
        <button onClick={onToast}>toast</button>
        <Toast />
    </div>
  );
}
```

It is effective for displaying a toast in the form of a component rather than a simple text message.