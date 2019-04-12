---
path: /docs/tooltip
redirect_from:
  - /components/tooltip
---

# Tooltip

```jsx
import {
  Tooltip,
  TooltipArrow,
  TooltipReference,
  useTooltipState,
  Button
} from "reakit";

function Example() {
  const tooltip = useTooltipState();
  return (
    <div style={{ padding: 100 }}>
      <TooltipReference as={Button} {...tooltip}>
        Reference
      </TooltipReference>
      <Tooltip {...tooltip}>
        <TooltipArrow {...tooltip} />
        tooltip
      </Tooltip>
    </div>
  );
}
```

## Props

<!-- Automatically generated -->

### `useTooltipState`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`placement`** | <code>"auto-start" &#124; "auto" &#124; "auto-end" &#124; "top-start" &#124; "top" &#124; "top-end" &#124; "right-start" &#124; "right" &#124; "right-end" &#124; "bottom-end" &#124; "bottom" &#124; "bottom-start" &#124; "left-end" &#124; "left" &#124; "left-start"</code> | Actual `placement`. |
| **`unstable_flip`** | <code>boolean &#124; undefined</code> | Whether or not flip the popover. |
| **`unstable_shift`** | <code>boolean &#124; undefined</code> | Whether or not shift the popover. |
| **`unstable_gutter`** | <code>number &#124; undefined</code> | Offset between the reference and the popover. |

### `Tooltip`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`unstable_popoverRef`** | <code>RefObject<HTMLElement &#124; null></code> | The popover element. |

### `TooltipArrow`

| Name | Type | Description |
|------|------|-------------|
| **`placement`** | <code>"auto-start" &#124; "auto" &#124; "auto-end" &#124; "top-start" &#124; "top" &#124; "top-end" &#124; "right-start" &#124; "right" &#124; "right-end" &#124; "bottom-end" &#124; "bottom" &#124; "bottom-start" &#124; "left-end" &#124; "left" &#124; "left-start"</code> | Actual `placement`. |

### `TooltipReference`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_referenceRef`** | <code>RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
