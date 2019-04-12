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
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`unstable_flip`** | <code>boolean &#124; undefined</code> | Whether or not flip the popover. |
| **`unstable_shift`** | <code>boolean &#124; undefined</code> | Whether or not shift the popover. |
| **`unstable_gutter`** | <code>number &#124; undefined</code> | Offset between the reference and the popover. |

### `Tooltip`

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

### `TooltipArrow`

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

### `TooltipReference`

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
