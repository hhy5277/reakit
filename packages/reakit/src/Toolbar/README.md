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

<!-- Automatically generated -->

### `useToolbarState`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |

### `Toolbar`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |

### `ToolbarItem`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_register`** | <code>(id: string, ref: RefObject<HTMLElement>) => void</code> | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`stopId`** | <code>string &#124; undefined</code> | Element ID. |

### `ToolbarSeparator`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Separator's context orientation. The actual separator's oriention will be flipped based on this prop. So a `"vertical"` orientation means that the separator will have a `"horizontal"` orientation. |
