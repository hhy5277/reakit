---
path: /docs/popover
redirect_from:
  - /components/popover
  - /components/popover/popovercontainer
  - /components/popover/popoverhide
  - /components/popover/popovershow
  - /components/popover/popovertoggle
---

# Popover

```jsx
import React from "react";
import {
  Popover,
  PopoverArrow,
  PopoverDisclosure,
  usePopoverState,
  Dialog,
  DialogDisclosure,
  useDialogState,
  Menu,
  MenuDisclosure,
  MenuItem,
  MenuSeparator,
  useMenuState,
  Button
} from "reakit";

function Example() {
  const focusInRef = React.useRef();
  const popover = usePopoverState();
  const dialog = useDialogState();
  const subdialog = useDialogState();
  const menu = useMenuState();
  return (
    <div style={{ padding: 100 }}>
      <PopoverDisclosure {...popover}>Open Popover</PopoverDisclosure>
      <Popover {...popover}>
        <PopoverArrow {...popover} />
        <Button onClick={popover.hide}>Hide</Button>
        <DialogDisclosure {...dialog}>Open Dialog</DialogDisclosure>
        <Dialog {...dialog}>
          <MenuDisclosure {...menu}>Open Menu</MenuDisclosure>
          <Menu {...menu}>
            <MenuItem {...menu}>New File</MenuItem>
            <MenuItem {...menu}>New Window</MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem {...menu}>
              {props => (
                <DialogDisclosure {...props} {...subdialog}>
                  Open...
                </DialogDisclosure>
              )}
            </MenuItem>
            <Dialog {...subdialog}>
              I&apos;m a Dialog triggered by a menu item. Press ESC to close.
            </Dialog>
          </Menu>
        </Dialog>
      </Popover>
    </div>
  );
}
```

```jsx
import React from "react";
import {
  Popover,
  PopoverArrow,
  PopoverDisclosure,
  PopoverHide,
  PopoverBackdrop,
  usePopoverState
} from "reakit";

function Example() {
  const focusInRef = React.useRef();
  const popover = usePopoverState();
  return (
    <div style={{ padding: 100 }}>
      <PopoverDisclosure {...popover}>Disclosure</PopoverDisclosure>
      <PopoverBackdrop {...popover} />
      <Popover {...popover}>
        <PopoverArrow {...popover} />
        dsada
      </Popover>
      <input />
    </div>
  );
}
```

## Props

<!-- This generated automatically -->

### `usePopoverState`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`unstable_flip`** | <code>boolean &#124; undefined</code> | Whether or not flip the popover. |
| **`unstable_shift`** | <code>boolean &#124; undefined</code> | Whether or not shift the popover. |
| **`unstable_gutter`** | <code>number &#124; undefined</code> | Offset between the reference and the popover. |

### `Popover`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`modal`** | <code>boolean &#124; undefined</code> | Toggles Dialog's `modal` state.<br>  - Non-modal: `preventBodyScroll` doesn't work and focus is free.<br>  - Modal: `preventBodyScroll` is automatically enabled and focus is<br>trapped within the dialog. |
| **`hideOnEsc`** | <code>boolean &#124; undefined</code> | When enabled, user can hide the dialog by pressing `Escape`. |
| **`hideOnClickOutside`** | <code>boolean &#124; undefined</code> | When enabled, user can hide the dialog by clicking outside it. |
| **`preventBodyScroll`** | <code>boolean &#124; undefined</code> | When enabled, user can't scroll on body when the dialog is visible.<br>This option doesn't work if the dialog isn't modal. |
| **`unstable_initialFocusRef`** | <code>React.RefObject<HTMLElement> &#124; undefined</code> | The element that will be focused when the dialog shows.<br>When not set, the first tabbable element within the dialog will be used.<br>`autoFocusOnShow` disables it. |
| **`unstable_finalFocusRef`** | <code>React.RefObject<HTMLElement> &#124; undefined</code> | The element that will be focused when the dialog hides.<br>When not set, the disclosure component will be used.<br>`autoFocusOnHide` disables it. |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`unstable_arrowRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The arrow element. |
| **`unstable_popoverStyles`** | <code>Partial<CSSStyleDeclaration></code> | Popover styles. |
| **`unstable_arrowStyles`** | <code>Partial<CSSStyleDeclaration></code> | Arrow styles. |
| **`unstable_originalPlacement`** | <code>default.Placement</code> | `placement` passed to the hook. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |

### `PopoverArrow`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`unstable_arrowRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The arrow element. |
| **`unstable_popoverStyles`** | <code>Partial<CSSStyleDeclaration></code> | Popover styles. |
| **`unstable_arrowStyles`** | <code>Partial<CSSStyleDeclaration></code> | Arrow styles. |
| **`unstable_originalPlacement`** | <code>default.Placement</code> | `placement` passed to the hook. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |

### `PopoverBackdrop`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`unstable_arrowRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The arrow element. |
| **`unstable_popoverStyles`** | <code>Partial<CSSStyleDeclaration></code> | Popover styles. |
| **`unstable_arrowStyles`** | <code>Partial<CSSStyleDeclaration></code> | Arrow styles. |
| **`unstable_originalPlacement`** | <code>default.Placement</code> | `placement` passed to the hook. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |

### `PopoverDisclosure`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | <code>string[] &#124; undefined</code> | Keyboard keys to trigger click. |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`unstable_arrowRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The arrow element. |
| **`unstable_popoverStyles`** | <code>Partial<CSSStyleDeclaration></code> | Popover styles. |
| **`unstable_arrowStyles`** | <code>Partial<CSSStyleDeclaration></code> | Arrow styles. |
| **`unstable_originalPlacement`** | <code>default.Placement</code> | `placement` passed to the hook. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
