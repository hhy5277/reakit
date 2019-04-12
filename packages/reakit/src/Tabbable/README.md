---
path: /docs/tabbable
---

# Tabbable

## Usage

```jsx
import { Tabbable } from "reakit";

function Example() {
  return (
    <Tabbable as="div" disabled>
      Tabbable
    </Tabbable>
  );
}
```

## Props

<!-- This generated automatically -->

### `Tabbable`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | <code>string[] &#124; undefined</code> | Keyboard keys to trigger click. |
