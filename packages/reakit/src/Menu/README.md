---
path: /docs/menu
---

# Menu

## Usage

```jsx
import React from "react";
import {
  useMenuState,
  Menu,
  MenuDisclosure,
  MenuItem,
  MenuSeparator,
  MenuItemCheckbox,
  mergeProps
} from "reakit";

const Menu1 = React.forwardRef((props, ref) => {
  const menu = useMenuState();
  return (
    <>
      <MenuDisclosure {...props} {...menu} ref={ref}>
        Item 3
      </MenuDisclosure>
      <Menu {...menu}>
        <MenuItemCheckbox {...menu} name="accept">
          Accept
        </MenuItemCheckbox>
        <MenuItemCheckbox {...menu} name="fruits" value="apple">
          Apple
        </MenuItemCheckbox>
        <MenuItemCheckbox {...menu} name="fruits" value="orange">
          Orange
        </MenuItemCheckbox>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Item 1</MenuItem>
        <MenuItem {...menu}>Item 2</MenuItem>
      </Menu>
    </>
  );
});

function Example() {
  const menu = useMenuState();
  return (
    <div style={{ margin: 150 }}>
      <MenuDisclosure {...menu}>disclosure</MenuDisclosure>
      <Menu aria-label="menu" {...menu}>
        <MenuItem {...menu}>Item 1</MenuItem>
        <MenuItem {...menu}>Item 2</MenuItem>
        <MenuItem {...menu}>{props => <Menu1 {...props} />}</MenuItem>
      </Menu>
    </div>
  );
}
```

```jsx
import React from "react";
import {
  useMenuState,
  Menu,
  MenuDisclosure,
  MenuItem,
  MenuSeparator,
  StaticMenu,
  MenuItemCheckbox,
  MenuItemRadio,
  mergeProps
} from "reakit";

const Menu1 = React.forwardRef((props, ref) => {
  const menu = useMenuState({ unstable_values: { language: "css" } });
  return (
    <>
      <MenuDisclosure {...props} {...menu} ref={ref}>
        Ghi
      </MenuDisclosure>
      <Menu {...menu}>
        <MenuItem {...menu}>Jkl</MenuItem>
        <MenuItem {...menu}>Jkld</MenuItem>
        <MenuItem {...menu}>Mno</MenuItem>
        <MenuItemRadio {...menu} name="language" value="html">
          HTML
        </MenuItemRadio>
        <MenuItemRadio {...menu} name="language" value="js">
          JS
        </MenuItemRadio>
        <MenuItemRadio {...menu} name="language" value="css">
          CSS
        </MenuItemRadio>
      </Menu>
    </>
  );
});

const Menu2 = React.forwardRef((props, ref) => {
  const menu = useMenuState();
  return (
    <>
      <MenuDisclosure {...props} {...menu} ref={ref}>
        Pqr
      </MenuDisclosure>
      <Menu {...menu}>
        <MenuItem {...menu}>Stu</MenuItem>
        <MenuItem {...menu}>Vwx</MenuItem>
        <MenuItem {...menu}>{p => <Menu1 {...p} />}</MenuItem>
        <MenuItemCheckbox {...menu} name="accept">
          Accept
        </MenuItemCheckbox>
        <MenuItemCheckbox {...menu} name="fruits" value="apple">
          Apple
        </MenuItemCheckbox>
        <MenuItemCheckbox {...menu} name="fruits" value="orange">
          Orange
        </MenuItemCheckbox>
      </Menu>
    </>
  );
});

function Example() {
  const menu = useMenuState({ orientation: "horizontal" });
  return (
    <div style={{ margin: 150 }}>
      <StaticMenu aria-label="menu" {...menu}>
        <MenuItem {...menu}>Abc</MenuItem>
        <MenuItem {...menu}>Def</MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>{props => <Menu1 {...props} />}</MenuItem>
        <MenuItem {...menu}>{props => <Menu2 {...props} />}</MenuItem>
        <MenuItem {...menu}>Ded</MenuItem>
      </StaticMenu>
    </div>
  );
}
```

## Props

<!-- Automatically generated -->

### `useMenuState`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`unstable_flip`** | <code>boolean &#124; undefined</code> | Whether or not flip the popover. |
| **`unstable_shift`** | <code>boolean &#124; undefined</code> | Whether or not shift the popover. |
| **`unstable_gutter`** | <code>number &#124; undefined</code> | Offset between the reference and the popover. |
| **`unstable_values`** | <code>Record<string, any></code> | TODO: Description |

### `Menu`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`modal`** | <code>boolean &#124; undefined</code> | Toggles Dialog's `modal` state.<br>  - Non-modal: `preventBodyScroll` doesn't work and focus is free.<br>  - Modal: `preventBodyScroll` is automatically enabled and focus is trapped within the dialog. |
| **`hideOnEsc`** | <code>boolean &#124; undefined</code> | When enabled, user can hide the dialog by pressing `Escape`. |
| **`hideOnClickOutside`** | <code>boolean &#124; undefined</code> | When enabled, user can hide the dialog by clicking outside it. |
| **`preventBodyScroll`** | <code>boolean &#124; undefined</code> | When enabled, user can't scroll on body when the dialog is visible. This option doesn't work if the dialog isn't modal. |
| **`unstable_initialFocusRef`** | <code>React.RefObject<HTMLElement> &#124; undefined</code> | The element that will be focused when the dialog shows. When not set, the first tabbable element within the dialog will be used. `autoFocusOnShow` disables it. |
| **`unstable_finalFocusRef`** | <code>React.RefObject<HTMLElement> &#124; undefined</code> | The element that will be focused when the dialog hides. When not set, the disclosure component will be used. `autoFocusOnHide` disables it. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |

### `MenuDisclosure`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |

### `MenuGroup`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |

### `MenuItem`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L40) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`stopId`** | <code>string &#124; undefined</code> | Element ID. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |

### `MenuItemCheckbox`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`currentValue`** | <code>boolean &#124; any[] &#124; "indeterminate"</code> | Stores the state of the checkbox. If checkboxes that share this state have defined a `value` prop, it's going to be an array. |
| **`setValue`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Checkbox/CheckboxState.ts#L18) | Sets `currentValue`. |
| **`value`** | <code>any</code> | Checkbox's value is going to be used when multiple checkboxes share the same state. Checking a checkbox with value will add it to the state array. |
| **`checked`** | <code>boolean &#124; undefined</code> | Checkbox's checked state. If present, it's used instead of currentValue. |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L40) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`stopId`** | <code>string &#124; undefined</code> | Element ID. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`unstable_values`** | <code>Record<string, any></code> | TODO: Description |
| **`unstable_update`** | <code>(name: string, value?: any) => void</code> | TODO: Description |
| **`name`** | <code>string</code> | TODO: Description |

### `MenuItemRadio`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L40) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`stopId`** | <code>string &#124; undefined</code> | Element ID. |
| **`currentValue`** | <code>any</code> | The `value` attribute of the current checked radio. |
| **`setValue`** | <code>React.Dispatch<any></code> | Changes the `currentValue` state. |
| **`value`** | <code>any</code> | Same as the `value` attribute. |
| **`checked`** | <code>boolean &#124; undefined</code> | Same as the `checked` attribute. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`unstable_values`** | <code>Record<string, any></code> | TODO: Description |
| **`unstable_update`** | <code>(name: string, value?: any) => void</code> | TODO: Description |
| **`name`** | <code>string</code> | TODO: Description |

### `MenuSeparator`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Separator's context orientation. The actual separator's oriention will be flipped based on this prop. So a `"vertical"` orientation means that the separator will have a `"horizontal"` orientation. |

### `StaticMenu`

| Name | Type | Description |
|------|------|-------------|
| **`unstable_system`** | <code>unknown</code> | Options passed to `reakit-system-*` |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
