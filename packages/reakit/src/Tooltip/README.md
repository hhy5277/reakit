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
| **`placement`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L62) | Actual `placement`. |
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
| **`placement`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L62) | Actual `placement`. |

### `TooltipReference`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_referenceRef`** | <code>RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
