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

<!-- This generated automatically -->

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
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`modal`** | <code>boolean &#124; undefined</code> | Toggles Dialog's `modal` state.<br>  - Non-modal: `preventBodyScroll` doesn't work and focus is free.<br>  - Modal: `preventBodyScroll` is automatically enabled and focus is<br>trapped within the dialog. |
| **`hideOnEsc`** | <code>boolean &#124; undefined</code> | When enabled, user can hide the dialog by pressing `Escape`. |
| **`hideOnClickOutside`** | <code>boolean &#124; undefined</code> | When enabled, user can hide the dialog by clicking outside it. |
| **`preventBodyScroll`** | <code>boolean &#124; undefined</code> | When enabled, user can't scroll on body when the dialog is visible.<br>This option doesn't work if the dialog isn't modal. |
| **`unstable_initialFocusRef`** | <code>React.RefObject<HTMLElement> &#124; undefined</code> | The element that will be focused when the dialog shows.<br>When not set, the first tabbable element within the dialog will be used.<br>`autoFocusOnShow` disables it. |
| **`unstable_finalFocusRef`** | <code>React.RefObject<HTMLElement> &#124; undefined</code> | The element that will be focused when the dialog hides.<br>When not set, the disclosure component will be used.<br>`autoFocusOnHide` disables it. |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`unstable_arrowRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The arrow element. |
| **`unstable_popoverStyles`** | <code>Partial<CSSStyleDeclaration></code> | Popover styles. |
| **`unstable_arrowStyles`** | <code>Partial<CSSStyleDeclaration></code> | Arrow styles. |
| **`unstable_originalPlacement`** | <code>default.Placement</code> | `placement` passed to the hook. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_pastId`** | <code>string &#124; null</code> | The last focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |
| **`unstable_values`** | <code>Record<string, any></code> | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`unstable_reset`** | <code>() => void</code> | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`unstable_update`** | <code>(name: string, value?: any) => void</code> | TODO: Description |

### `MenuDisclosure`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | <code>string[] &#124; undefined</code> | Keyboard keys to trigger click. |
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
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_pastId`** | <code>string &#124; null</code> | The last focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |
| **`unstable_values`** | <code>Record<string, any></code> | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`unstable_reset`** | <code>() => void</code> | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`unstable_update`** | <code>(name: string, value?: any) => void</code> | TODO: Description |

### `MenuGroup`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_pastId`** | <code>string &#124; null</code> | The last focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`unstable_arrowRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The arrow element. |
| **`unstable_popoverStyles`** | <code>Partial<CSSStyleDeclaration></code> | Popover styles. |
| **`unstable_arrowStyles`** | <code>Partial<CSSStyleDeclaration></code> | Arrow styles. |
| **`unstable_originalPlacement`** | <code>default.Placement</code> | `placement` passed to the hook. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`unstable_values`** | <code>Record<string, any></code> | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`unstable_reset`** | <code>() => void</code> | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | <code>(name: string, value?: any) => void</code> | TODO: Description |

### `MenuItem`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | <code>string[] &#124; undefined</code> | Keyboard keys to trigger click. |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_pastId`** | <code>string &#124; null</code> | The last focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`unstable_reset`** | <code>() => void</code> | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`stopId`** | <code>string &#124; undefined</code> | Element ID. |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`unstable_arrowRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The arrow element. |
| **`unstable_popoverStyles`** | <code>Partial<CSSStyleDeclaration></code> | Popover styles. |
| **`unstable_arrowStyles`** | <code>Partial<CSSStyleDeclaration></code> | Arrow styles. |
| **`unstable_originalPlacement`** | <code>default.Placement</code> | `placement` passed to the hook. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`unstable_values`** | <code>Record<string, any></code> | TODO: Description |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | <code>(name: string, value?: any) => void</code> | TODO: Description |

### `MenuItemCheckbox`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | <code>string[] &#124; undefined</code> | Keyboard keys to trigger click. |
| **`currentValue`** | <code>boolean &#124; any[] &#124; "indeterminate"</code> | Stores the state of the checkbox.<br>If checkboxes that share this state have defined a `value` prop, it's<br>going to be an array. |
| **`setValue`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Checkbox/CheckboxState.ts#L18) | Sets `currentValue`. |
| **`value`** | <code>any</code> | Checkbox's value is going to be used when multiple checkboxes share the<br>same state. Checking a checkbox with value will add it to the state<br>array. |
| **`checked`** | <code>boolean &#124; undefined</code> | Checkbox's checked state. If present, it's used instead of currentValue. |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_pastId`** | <code>string &#124; null</code> | The last focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`unstable_reset`** | <code>() => void</code> | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`stopId`** | <code>string &#124; undefined</code> | Element ID. |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`unstable_arrowRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The arrow element. |
| **`unstable_popoverStyles`** | <code>Partial<CSSStyleDeclaration></code> | Popover styles. |
| **`unstable_arrowStyles`** | <code>Partial<CSSStyleDeclaration></code> | Arrow styles. |
| **`unstable_originalPlacement`** | <code>default.Placement</code> | `placement` passed to the hook. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`unstable_values`** | <code>Record<string, any></code> | TODO: Description |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | <code>(name: string, value?: any) => void</code> | TODO: Description |
| **`name`** | <code>string</code> | TODO: Description |

### `MenuItemRadio`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | <code>string[] &#124; undefined</code> | Keyboard keys to trigger click. |
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_pastId`** | <code>string &#124; null</code> | The last focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`unstable_reset`** | <code>() => void</code> | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`stopId`** | <code>string &#124; undefined</code> | Element ID. |
| **`currentValue`** | <code>any</code> | The `value` attribute of the current checked radio. |
| **`setValue`** | <code>React.Dispatch<any></code> | Changes the `currentValue` state. |
| **`value`** | <code>any</code> | Same as the `value` attribute. |
| **`checked`** | <code>boolean &#124; undefined</code> | Same as the `checked` attribute. |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`unstable_arrowRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The arrow element. |
| **`unstable_popoverStyles`** | <code>Partial<CSSStyleDeclaration></code> | Popover styles. |
| **`unstable_arrowStyles`** | <code>Partial<CSSStyleDeclaration></code> | Arrow styles. |
| **`unstable_originalPlacement`** | <code>default.Placement</code> | `placement` passed to the hook. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`unstable_values`** | <code>Record<string, any></code> | TODO: Description |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | <code>(name: string, value?: any) => void</code> | TODO: Description |
| **`name`** | <code>string</code> | TODO: Description |

### `MenuSeparator`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_pastId`** | <code>string &#124; null</code> | The last focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`unstable_arrowRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The arrow element. |
| **`unstable_popoverStyles`** | <code>Partial<CSSStyleDeclaration></code> | Popover styles. |
| **`unstable_arrowStyles`** | <code>Partial<CSSStyleDeclaration></code> | Arrow styles. |
| **`unstable_originalPlacement`** | <code>default.Placement</code> | `placement` passed to the hook. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`unstable_values`** | <code>Record<string, any></code> | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`unstable_reset`** | <code>() => void</code> | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | <code>(name: string, value?: any) => void</code> | TODO: Description |

### `StaticMenu`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | <code>"horizontal" &#124; "vertical" &#124; undefined</code> | Defines the orientation of the rover list. |
| **`unstable_stops`** | <code>Stop[]</code> | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | <code>string &#124; null</code> | The current focused element ID. |
| **`unstable_pastId`** | <code>string &#124; null</code> | The last focused element ID. |
| **`unstable_loop`** | <code>boolean</code> | If enabled, the next item after the last one will be the first one. |
| **`visible`** | <code>boolean</code> | Whether it's visible or not. |
| **`unstable_referenceRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The reference element. |
| **`unstable_popoverRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The popover element. |
| **`unstable_arrowRef`** | <code>React.RefObject<HTMLElement &#124; null></code> | The arrow element. |
| **`unstable_popoverStyles`** | <code>Partial<CSSStyleDeclaration></code> | Popover styles. |
| **`unstable_arrowStyles`** | <code>Partial<CSSStyleDeclaration></code> | Arrow styles. |
| **`unstable_originalPlacement`** | <code>default.Placement</code> | `placement` passed to the hook. |
| **`placement`** | <code>default.Placement</code> | Actual `placement`. |
| **`unstable_values`** | <code>Record<string, any></code> | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | <code>(id: string) => void</code> | Unregisters the roving item. |
| **`unstable_move`** | <code>(id: string &#124; null) => void</code> | Moves focus onto a given element ID. |
| **`unstable_next`** | <code>() => void</code> | Moves focus onto the next element. |
| **`unstable_previous`** | <code>() => void</code> | Moves focus onto the previous element. |
| **`unstable_first`** | <code>() => void</code> | Moves focus onto the first element. |
| **`unstable_last`** | <code>() => void</code> | Moves focus onto the last element. |
| **`unstable_reset`** | <code>() => void</code> | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`show`** | <code>() => void</code> | Changes the `visible` state to `true` |
| **`hide`** | <code>() => void</code> | Changes the `visible` state to `false` |
| **`toggle`** | <code>() => void</code> | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | <code>(name: string, value?: any) => void</code> | TODO: Description |
