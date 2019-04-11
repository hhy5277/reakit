---
path: /docs/toolbar
redirect_from:
  - /components/toolbar
---

# Toolbar

```jsx
import {
  Button,
  Menu,
  MenuDisclosure,
  MenuItem,
  useMenuState,
  Group,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
  useToolbarState
} from "reakit";

function Example() {
  const toolbar = useToolbarState();
  const menu = useMenuState();
  return (
    <Toolbar {...toolbar}>
      <ToolbarItem {...toolbar}>Item 1</ToolbarItem>
      <ToolbarItem {...toolbar}>Item 2</ToolbarItem>
      <ToolbarSeparator {...toolbar} />
      <ToolbarItem {...toolbar}>Item 3</ToolbarItem>
      <Group>
        <ToolbarItem as={Button} {...toolbar}>
          Item 4
        </ToolbarItem>
        <ToolbarItem as={MenuDisclosure} {...menu} {...toolbar}>
          Item 5
        </ToolbarItem>
        <Menu {...menu}>
          <MenuItem {...menu}>Item 1</MenuItem>
          <MenuItem {...menu}>Item 2</MenuItem>
          <MenuItem {...menu}>Item 3</MenuItem>
        </Menu>
      </Group>
      <ToolbarSeparator {...toolbar} />
      <ToolbarItem {...toolbar}>Item 6</ToolbarItem>
    </Toolbar>
  );
}
```

```jsx
import {
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
  useToolbarState
} from "reakit";

function Example() {
  const toolbar = useToolbarState({ orientation: "vertical" });
  return (
    <Toolbar {...toolbar}>
      <ToolbarItem {...toolbar}>Item 1</ToolbarItem>
      <ToolbarItem {...toolbar}>Item 2</ToolbarItem>
      <ToolbarSeparator {...toolbar} />
      <ToolbarItem {...toolbar}>Item 3</ToolbarItem>
    </Toolbar>
  );
}
```

## Props

<!-- This generated automatically -->

### `useToolbarState`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |

### `Toolbar`

| Name | Type | Description |
|------|------|-------------|
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

### `ToolbarItem`

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

### `ToolbarSeparator`

| Name | Type | Description |
|------|------|-------------|
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
