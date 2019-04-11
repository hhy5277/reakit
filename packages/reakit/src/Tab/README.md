---
path: /docs/tab
redirect_from:
  - /components/tabs
  - /components/tabs/tabscontainer
  - /components/tabs/tabsnext
  - /components/tabs/tabspanel
  - /components/tabs/tabsprevious
  - /components/tabs/tabstab
---

# Tab

## Usage

```jsx
import { useTabState, Tab, TabList, TabPanel } from "reakit";

function Example() {
  const tab = useTabState();
  return (
    <>
      <TabList {...tab}>
        <Tab stopId="tab1" {...tab}>
          Tab 1
        </Tab>
        <Tab stopId="tab2" disabled {...tab}>
          Tab 2
        </Tab>
        <Tab stopId="tab3" {...tab}>
          Tab 3
        </Tab>
      </TabList>
      <TabPanel stopId="tab1" {...tab}>
        Tab 1
      </TabPanel>
      <TabPanel stopId="tab2" {...tab}>
        Tab 2
      </TabPanel>
      <TabPanel stopId="tab3" {...tab}>
        Tab 3
      </TabPanel>
    </>
  );
}
```

```jsx
import { useTabState, Tab, TabList, TabPanel } from "reakit";

function Example() {
  const tab = useTabState({
    orientation: "vertical",
    unstable_manual: true,
    unstable_selectedId: "tab2"
  });
  return (
    <div style={{ display: "flex" }}>
      <TabList {...tab}>
        <Tab stopId="tab1" {...tab}>
          Tab 1
        </Tab>
        <Tab stopId="tab2" disabled {...tab}>
          Tab 2
        </Tab>
        <Tab stopId="tab3" {...tab}>
          Tab 3
        </Tab>
      </TabList>
      <TabPanel stopId="tab1" {...tab}>
        Tab 1
      </TabPanel>
      <TabPanel stopId="tab2" {...tab}>
        Tab 2
      </TabPanel>
      <TabPanel stopId="tab3" {...tab}>
        Tab 3
      </TabPanel>
    </div>
  );
}
```

## Props

<!-- This generated automatically -->

### `useTabState`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_stops`** | `Stop[]` | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_pastId`** | `string | null` | The last focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`unstable_baseId`** | `string` | TODO: Description |
| **`unstable_selectedId`** | `string | null` | TODO: Description |
| **`unstable_manual`** | `boolean` | TODO: Description |

### `Tab`

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
| **`stopId`** | `string` | TODO: Description |
| **`unstable_baseId`** | `string` | TODO: Description |
| **`unstable_selectedId`** | `string | null` | TODO: Description |
| **`unstable_manual`** | `boolean` | TODO: Description |
| **`unstable_select`** | `(id: string | null) => void` |  |

### `TabList`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_stops`** | `Stop[]` | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_pastId`** | `string | null` | The last focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`unstable_baseId`** | `string` | TODO: Description |
| **`unstable_selectedId`** | `string | null` | TODO: Description |
| **`unstable_manual`** | `boolean` | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | `(id: string) => void` | Unregisters the roving item. |
| **`unstable_move`** | `(id: string | null) => void` | Moves focus onto a given element ID. |
| **`unstable_next`** | `() => void` | Moves focus onto the next element. |
| **`unstable_previous`** | `() => void` | Moves focus onto the previous element. |
| **`unstable_first`** | `() => void` | Moves focus onto the first element. |
| **`unstable_last`** | `() => void` | Moves focus onto the last element. |
| **`unstable_reset`** | `() => void` | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`unstable_select`** | `(id: string | null) => void` |  |

### `TabPanel`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_stops`** | `Stop[]` | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_pastId`** | `string | null` | The last focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`unstable_baseId`** | `string` | TODO: Description |
| **`unstable_selectedId`** | `string | null` | TODO: Description |
| **`unstable_manual`** | `boolean` | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | `(id: string) => void` | Unregisters the roving item. |
| **`unstable_move`** | `(id: string | null) => void` | Moves focus onto a given element ID. |
| **`unstable_next`** | `() => void` | Moves focus onto the next element. |
| **`unstable_previous`** | `() => void` | Moves focus onto the previous element. |
| **`unstable_first`** | `() => void` | Moves focus onto the first element. |
| **`unstable_last`** | `() => void` | Moves focus onto the last element. |
| **`unstable_reset`** | `() => void` | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`unstable_select`** | `(id: string | null) => void` |  |
| **`stopId`** | `string` | TODO: Description |
