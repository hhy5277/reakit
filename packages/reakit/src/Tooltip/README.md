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

<!-- This generated automatically -->

### `useTooltipState`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`unstable_flip`** | `boolean | undefined` | Whether or not flip the popover. |
| **`unstable_shift`** | `boolean | undefined` | Whether or not shift the popover. |
| **`unstable_gutter`** | `number | undefined` | Offset between the reference and the popover. |

### `Tooltip`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`unstable_referenceRef`** | `React.RefObject<HTMLElement | null>` | The reference element. |
| **`unstable_popoverRef`** | `React.RefObject<HTMLElement | null>` | The popover element. |
| **`unstable_arrowRef`** | `React.RefObject<HTMLElement | null>` | The arrow element. |
| **`unstable_popoverStyles`** | `Partial<CSSStyleDeclaration>` | Popover styles. |
| **`unstable_arrowStyles`** | `Partial<CSSStyleDeclaration>` | Arrow styles. |
| **`unstable_originalPlacement`** | `default.Placement` | `placement` passed to the hook. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |

### `TooltipArrow`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`unstable_referenceRef`** | `React.RefObject<HTMLElement | null>` | The reference element. |
| **`unstable_popoverRef`** | `React.RefObject<HTMLElement | null>` | The popover element. |
| **`unstable_arrowRef`** | `React.RefObject<HTMLElement | null>` | The arrow element. |
| **`unstable_popoverStyles`** | `Partial<CSSStyleDeclaration>` | Popover styles. |
| **`unstable_arrowStyles`** | `Partial<CSSStyleDeclaration>` | Arrow styles. |
| **`unstable_originalPlacement`** | `default.Placement` | `placement` passed to the hook. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |

### `TooltipReference`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`unstable_referenceRef`** | `React.RefObject<HTMLElement | null>` | The reference element. |
| **`unstable_popoverRef`** | `React.RefObject<HTMLElement | null>` | The popover element. |
| **`unstable_arrowRef`** | `React.RefObject<HTMLElement | null>` | The arrow element. |
| **`unstable_popoverStyles`** | `Partial<CSSStyleDeclaration>` | Popover styles. |
| **`unstable_arrowStyles`** | `Partial<CSSStyleDeclaration>` | Arrow styles. |
| **`unstable_originalPlacement`** | `default.Placement` | `placement` passed to the hook. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
