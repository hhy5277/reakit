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

<!-- Automatically generated -->

### `Tabbable`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
