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

<!-- This generated automatically -->

### `useHiddenState`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | `boolean` | Whether it's visible or not. |

### `Hidden`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |

### `HiddenDisclosure`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | `boolean | undefined` | Same as the HTML attribute. |
| **`unstable_focusable`** | `boolean | undefined` | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | `string[] | undefined` | Keyboard keys to trigger click. |
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
