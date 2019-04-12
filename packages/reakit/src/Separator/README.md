---
path: /docs/separator
redirect_from:
  - /components/divider
---

# Separator

## Usage

```jsx
import { Separator } from "reakit";

function Example() {
  return <Separator orientation="horizontal" />;
}
```

## Props

<!-- Automatically generated -->

### `Separator`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Separator's context orientation. The actual separator's oriention will be flipped based on this prop. So a `"vertical"` orientation means that the separator will have a `"horizontal"` orientation. |
