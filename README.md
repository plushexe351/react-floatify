# 🍞 react-floatify

A lightweight, customizable toast notification library for React.  
Built using **React** and for **React**, **TypeScript**, **Framer Motion** for animation and **SCSS** for styling.  

## Features

- Multiple toast types: `success`, `error`, `warning`, `default`  
- Variants: `regular`, `outlined`, `contained`  
- Adjustable spacing, shadows, position and pop-in-out directions
- Configurable duration + optional progress bar  
- Option to disable animations  
- Customizable `fontSize` and `iconSize`  
- Override styles using `sx`
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
Import CSS and Trigger a toast with the `useToast` hook:

```jsx
import { useToast } from "react-floatify";
import "react-floatify/dist/react-floatify.css";

function Example() {
  const { addToast } = useToast();

  return (
    <button
      onClick={() =>
        addToast("Hello World!", {
          type: "success",
          variant: "contained",
          spacing:"regular",
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

### TypeScript Usage

If you’re using TypeScript and your `type` or `variant` values come from component state, you should import the provided types to get full type safety:

```tsx
import { useToast, type ToastType, type ToastVariant } from "react-floatify";

const [type, setType] = useState<ToastType>("default");
const [variant, setVariant] = useState<ToastVariant>("regular");
```

## Options 

| Option             | Type                                          | Default    | Description                           |
|--------------------|-----------------------------------------------|------------|---------------------------------------|
| `type`             | `"success"` \| `"error"` \| `"warning"` \| `"default"` | `"default"` | Toast style                           |
| `variant`          | `"regular"` \| `"outlined"` \| `"contained"`  | `"regular"` | Visual variant                        |
| `duration`         | `number`                                     | `5`        | Duration in seconds                   |
| `spacing`         | `"small"` \| `"regular"` \| `"large"`         | `"regular`  | Message Padding                    |
| `disableAnimation` | `boolean`                                    | `false`    | Disable entry/exit animations         |
| `elevation` | `number`                                            | `3`         | Box Shadow on Toast Container        |
| `showProgress`     | `boolean`                                    | `true`     | Show progress bar                     |
| `slideFrom`     | `"left"`\|`"right"`\|`"bottom"`\|`"top"`        | `"right"`     | Slide-from direction (slides back into that direction)                    |
| `position`     | `"top left"`\|`"top right"`\|`"top center"`\|`"bottom left"`        | `"bottom right"`\|`"bottom center"`     | Position on Screen                |
| `showProgress`     | `boolean`                                    | `true`     | Show progress bar                     |
| `fontSize`         | `string` \| `number`                         | `14`       | Font size for message text            |
| `iconSize`         | `number`                                     | `17`       | Icon size                             |
| `sx`               | `React.CSSProperties`                        | `{}`       | Inline style overrides                |

### `position` prop must be used in `ToastProvider`

####Example usage:

```tsx
<ToastProvider position="bottom center">...</ToastProvider>
```
## DOM Structure

Each toast is rendered inside a `.Toast-stack-modal`.  
The basic DOM structure looks like this for a toast with `type:"success"`, `variant:"regular"`, `iconSize:17`, `spacing:"regular"` and `showProgress:true`:

```html
<div class="Toast-stack-modal">
  <div class="Toasty-container success regular">
    <div class="Toasty-message regular-spacing">
      <CheckCircle size={17}/> // lucide-react icon
      Welcome to Floatify
    </div>
    <div class="Toasty-progress-container">
      <div class="Toasty-progress-bar success"></div>
    </div>
  </div>
</div>
```