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

<!-- This generated automatically -->

### `useRadioState`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`currentValue`** | `any` | The `value` attribute of the current checked radio. |

### `Radio`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | `boolean | undefined` | Same as the HTML attribute. |
| **`unstable_focusable`** | `boolean | undefined` | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | `string[] | undefined` | Keyboard keys to trigger click. |
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_stops`** | `Stop[]` | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_pastId`** | `string | null` | The last focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | `(id: string) => void` | Unregisters the roving item. |
| **`unstable_move`** | `(id: string | null) => void` | Moves focus onto a given element ID. |
| **`unstable_next`** | `() => void` | Moves focus onto the next element. |
| **`unstable_previous`** | `() => void` | Moves focus onto the previous element. |
| **`unstable_first`** | `() => void` | Moves focus onto the first element. |
| **`unstable_last`** | `() => void` | Moves focus onto the last element. |
| **`unstable_reset`** | `() => void` | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`stopId`** | `string | undefined` | Element ID. |
| **`currentValue`** | `any` | The `value` attribute of the current checked radio. |
| **`setValue`** | `React.Dispatch<any>` | Changes the `currentValue` state. |
| **`value`** | `any` | Same as the `value` attribute. |
| **`checked`** | `boolean | undefined` | Same as the `checked` attribute. |

### `RadioGroup`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_stops`** | `Stop[]` | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_pastId`** | `string | null` | The last focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`currentValue`** | `any` | The `value` attribute of the current checked radio. |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | `(id: string) => void` | Unregisters the roving item. |
| **`unstable_move`** | `(id: string | null) => void` | Moves focus onto a given element ID. |
| **`unstable_next`** | `() => void` | Moves focus onto the next element. |
| **`unstable_previous`** | `() => void` | Moves focus onto the previous element. |
| **`unstable_first`** | `() => void` | Moves focus onto the first element. |
| **`unstable_last`** | `() => void` | Moves focus onto the last element. |
| **`unstable_reset`** | `() => void` | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`setValue`** | `React.Dispatch<any>` | Changes the `currentValue` state. |
