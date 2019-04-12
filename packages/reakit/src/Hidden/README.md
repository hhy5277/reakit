---
path: /docs/hidden
redirect_from:
  - /components/hidden
  - /components/hidden/hiddencontainer
  - /components/hidden/hiddenhide
  - /components/hidden/hiddenshow
  - /components/hidden/hiddentoggle
---

# Hidden

`Hidden` is a highly generic yet powerful Reakit component. It simply hides itself away and waits for a `visible` prop to show up.

## Usage

```jsx
import { Hidden } from "reakit";

function Example() {
  return <Hidden visible>Hidden</Hidden>;
}
```

```jsx
import { HiddenDisclosure, Hidden, useHiddenState } from "reakit";

function Example() {
  const state = useHiddenState({ visible: true });
  return (
    <div>
      <HiddenDisclosure {...state} disabled unstable_focusable>
        Toggle
      </HiddenDisclosure>
      <Hidden {...state}>Hidden</Hidden>
    </div>
  );
}

return <Example />;
```

## Props

<!-- Automatically generated -->

### `useHiddenState`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |

### `Hidden`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |

### `HiddenDisclosure`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
