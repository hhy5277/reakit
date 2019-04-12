---
path: /docs/radio
---

# Radio

## Usage

```jsx
import { Radio, RadioGroup, useRadioState } from "reakit";

function Example() {
  const radio = useRadioState();
  return (
    <RadioGroup aria-label="fruits" {...radio}>
      <label>
        <Radio {...radio} value="apple" /> apple
      </label>
      <label>
        <Radio {...radio} value="orange" /> orange
      </label>
      <label>
        <Radio {...radio} value="watermelon" /> watermelon
      </label>
    </RadioGroup>
  );
}
```

## Props

<!-- Automatically generated -->

### `useRadioState`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |
| **`currentValue`** | <code>any</code> | The `value` attribute of the current checked radio. |

### `Radio`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L40) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`stopId`** | <code>string &#124; undefined</code> | Element ID. |
| **`currentValue`** | <code>any</code> | The `value` attribute of the current checked radio. |
| **`setValue`** | <code>(value: any) => void</code> | Changes the `currentValue` state. |
| **`value`** | <code>any</code> | Same as the `value` attribute. |
| **`checked`** | <code>boolean &#124; undefined</code> | Same as the `checked` attribute. |

### `RadioGroup`

No props to show
