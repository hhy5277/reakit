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

<!-- Automatically generated -->

### `useTabState`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |
| **`unstable_selectedId`** | <code>string &#124; null</code> | TODO: Description |
| **`unstable_manual`** | <code>boolean</code> | TODO: Description |

### `Tab`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_register`** | <code>(id: string, ref: RefObject<HTMLElement>) => void</code> | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`stopId`** | <code>string &#124; undefined</code> | Element ID. |
| **`unstable_manual`** | <code>boolean</code> | TODO: Description |
| **`unstable_selectedId`** | <code>string &#124; null</code> | TODO: Description |
| **`unstable_select`** | <code>(id: string &#124; null) => void</code> | TODO: Description |

### `TabList`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |

### `TabPanel`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`unstable_selectedId`** | <code>string &#124; null</code> | TODO: Description |
| **`stopId`** | <code>string</code> | TODO: Description |
