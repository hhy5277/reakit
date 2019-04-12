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

<!-- Automatically generated -->

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
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`modal`** | <code>boolean &#124; undefined</code> | Toggles Dialog's `modal` state.<br>  - Non-modal: `preventBodyScroll` doesn't work and focus is free.<br>  - Modal: `preventBodyScroll` is automatically enabled and focus is trapped within the dialog. |
| **`hideOnEsc`** | <code>boolean &#124; undefined</code> | When enabled, user can hide the dialog by pressing `Escape`. |
| **`hideOnClickOutside`** | <code>boolean &#124; undefined</code> | When enabled, user can hide the dialog by clicking outside it. |
| **`preventBodyScroll`** | <code>boolean &#124; undefined</code> | When enabled, user can't scroll on body when the dialog is visible. This option doesn't work if the dialog isn't modal. |
| **`unstable_initialFocusRef`** | <code>React.RefObject<HTMLElement> &#124; undefined</code> | The element that will be focused when the dialog shows. When not set, the first tabbable element within the dialog will be used. `autoFocusOnShow` disables it. |
| **`unstable_finalFocusRef`** | <code>React.RefObject<HTMLElement> &#124; undefined</code> | The element that will be focused when the dialog hides. When not set, the disclosure component will be used. `autoFocusOnHide` disables it. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |

### `PopoverArrow`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |

### `PopoverBackdrop`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |

### `PopoverDisclosure`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
