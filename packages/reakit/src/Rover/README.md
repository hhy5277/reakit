---
path: /docs/rover
---

# Rover

## Usage

```jsx
import { useRoverState, Rover } from "reakit";

function Example() {
  const roving = useRoverState({ unstable_currentId: "test" });
  return (
    <>
      <Rover {...roving}>Item 1</Rover>
      <Rover {...roving} disabled>
        Item 2
      </Rover>
      <Rover stopId="test" disabled {...roving}>
        Item 3
      </Rover>
      <Rover {...roving} disabled focusable>
        Item 4
      </Rover>
      <Rover {...roving}>Item 5</Rover>
    </>
  );
}
```

```jsx
import React from "react";
import { useRoverState, Rover } from "reakit";

function Example() {
  const roving = useRoverState({ unstable_currentId: "test" });
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>Toggle visible</button>
      <Rover {...roving}>Item 1</Rover>
      <Rover {...roving} disabled>
        Item 2
      </Rover>
      <Rover stopId="test" disabled {...roving}>
        Item 3
      </Rover>
      {visible && <Rover {...roving}>Item 3.5</Rover>}
      <Rover {...roving} disabled unstable_focusable>
        Item 4
      </Rover>
      <Rover {...roving}>Item 5</Rover>
    </>
  );
}
```

## Props

<!-- Automatically generated -->

### `useRoverState`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |

### `Rover`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
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
