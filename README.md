# 🍞 react-floatify

A lightweight, customizable toast notification library for React.  
Built with **Framer Motion** for animations and **SCSS** for styling.  

## Features

- Multiple toast types: `success`, `error`, `warning`, `default`  
- Variants: `regular`, `outlined`, `contained`  
- Configurable duration + optional progress bar  
- Option to disable animations  
- Customizable `fontSize` and `iconSize`  
- Override styles using `sx` or CSS variables  
- Tiny, tree-shakable, easy to use  

---

## Installation

```bash
npm install react-floatify
```

## Usage

Wrap your app with the `ToastProvider`:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastProvider } from "toasty-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
```
Trigger a toast with the `useToast` hook:

```tsx
import { useToast } from "react-floatify";

function Example() {
  const { addToast } = useToast();

  return (
    <button
      onClick={() =>
        addToast("Hello World!", {
          type: "success",
          variant: "contained",
          duration: 4,
          fontSize: 16,
          iconSize: 20,
          showProgress: true,
        })
      }
    >
      Show Toast
    </button>
  );
}
```

## Options 

| Option             | Type                                          | Default    | Description                           |
|--------------------|-----------------------------------------------|------------|---------------------------------------|
| `type`             | `"success"` \| `"error"` \| `"warning"` \| `"default"` | `"default"` | Toast style                           |
| `variant`          | `"regular"` \| `"outlined"` \| `"contained"`  | `"regular"` | Visual variant                        |
| `duration`         | `number`                                     | `5`        | Duration in seconds                   |
| `disableAnimation` | `boolean`                                    | `false`    | Disable entry/exit animations         |
| `showProgress`     | `boolean`                                    | `true`     | Show progress bar                     |
| `fontSize`         | `string` \| `number`                         | `14`       | Font size for message text            |
| `iconSize`         | `number`                                     | `17`       | Icon size                             |
| `sx`               | `React.CSSProperties`                        | `{}`       | Inline style overrides                |
