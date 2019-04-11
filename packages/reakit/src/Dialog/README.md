---
path: /docs/dialog
redirect_from:
  - /components/overlay
  - /components/overlay/overlaycontainer
  - /components/overlay/overlayhide
  - /components/overlay/overlayshow
  - /components/overlay/overlaytoggle
  - /components/backdrop
---

# Dialog

## Usage

```jsx
import React from "react";
import {
  Dialog,
  DialogDisclosure,
  DialogBackdrop,
  useDialogState,
  Button
} from "reakit";

function Example() {
  const focusInRef = React.useRef(null);
  const focusOutRef = React.useRef(null);
  const dialog = useDialogState();
  const dialog2 = useDialogState();
  // const style = {
  //   position: "fixed",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   background: "white",
  //   padding: 20,
  //   maxHeight: 100,
  //   overflow: "auto",
  //   border: "2px solid red",
  //   "-webkit-overflow-scrolling": "touch"
  // };
  // const backdropStyle = {
  //   position: "fixed",
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  //   background: "rgba(0, 0, 0, 0.5)"
  // };
  return (
    <>
      <Button ref={focusOutRef}>Focus out</Button>
      <DialogDisclosure {...dialog}>Show Dialog</DialogDisclosure>
      {/* <DialogBackdrop {...dialog} style={backdropStyle} /> */}
      <Dialog
        modal={false}
        hideOnClickOutside={false}
        aria-label="test"
        {...dialog}
      >
        <Button onClick={dialog.hide}>X</Button>
        <DialogDisclosure {...dialog2}>Show Dialog 2</DialogDisclosure>
        <div style={{ height: 500 }}>Hi</div>
        <Dialog hideOnClickOutside={false} {...dialog2}>
          <div style={{ height: 500 }}>Hi</div>
          <Button>Button</Button>
        </Dialog>
      </Dialog>
    </>
  );
}
```

```jsx
import React from "react";
import {
  Dialog,
  DialogDisclosure,
  DialogBackdrop,
  useDialogState,
  Button
} from "reakit";

function Example() {
  const focusInRef = React.useRef(null);
  const focusOutRef = React.useRef(null);
  const dialog = useDialogState();
  const dialog2 = useDialogState();
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    padding: 20,
    maxHeight: 50,
    overflow: "auto",
    border: "2px solid red",
    zIndex: 99999
  };
  const backdropStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99999,
    background: "rgba(0, 0, 0, 0.5)"
  };
  return (
    <>
      <Button ref={focusOutRef}>Focus out</Button>
      <DialogDisclosure {...dialog}>Show Dialog</DialogDisclosure>
      <Dialog modal={false} style={style} aria-label="test" {...dialog}>
        <Button onClick={dialog.hide}>X</Button>
        <DialogDisclosure {...dialog2}>Show Dialog 2</DialogDisclosure>
        <Dialog style={style} {...dialog2}>
          Hi
        </Dialog>
      </Dialog>
    </>
  );
}
```

## Props

<!-- This generated automatically -->

### `useDialogState`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | `boolean` | Whether it's visible or not. |

### `Dialog`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`modal`** | `boolean | undefined` | Toggles Dialog's `modal` state.<br>  - Non-modal: `preventBodyScroll` doesn't work and focus is free.<br>  - Modal: `preventBodyScroll` is automatically enabled and focus is<br>trapped within the dialog. |
| **`hideOnEsc`** | `boolean | undefined` | When enabled, user can hide the dialog by pressing `Escape`. |
| **`hideOnClickOutside`** | `boolean | undefined` | When enabled, user can hide the dialog by clicking outside it. |
| **`preventBodyScroll`** | `boolean | undefined` | When enabled, user can't scroll on body when the dialog is visible.<br>This option doesn't work if the dialog isn't modal. |
| **`unstable_initialFocusRef`** | `React.RefObject<HTMLElement> | undefined` | The element that will be focused when the dialog shows.<br>When not set, the first tabbable element within the dialog will be used.<br>`autoFocusOnShow` disables it. |
| **`unstable_finalFocusRef`** | `React.RefObject<HTMLElement> | undefined` | The element that will be focused when the dialog hides.<br>When not set, the disclosure component will be used.<br>`autoFocusOnHide` disables it. |

### `DialogBackdrop`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |

### `DialogDisclosure`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | `boolean | undefined` | Same as the HTML attribute. |
| **`unstable_focusable`** | `boolean | undefined` | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | `string[] | undefined` | Keyboard keys to trigger click. |
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
