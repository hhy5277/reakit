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
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`unstable_flip`** | `boolean | undefined` | Whether or not flip the popover. |
| **`unstable_shift`** | `boolean | undefined` | Whether or not shift the popover. |
| **`unstable_gutter`** | `number | undefined` | Offset between the reference and the popover. |
| **`unstable_values`** | `Record<string, any>` | TODO: Description |

### `Menu`

| Name | Type | Description |
|------|------|-------------|
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`modal`** | `boolean | undefined` | Toggles Dialog's `modal` state.<br>  - Non-modal: `preventBodyScroll` doesn't work and focus is free.<br>  - Modal: `preventBodyScroll` is automatically enabled and focus is<br>trapped within the dialog. |
| **`hideOnEsc`** | `boolean | undefined` | When enabled, user can hide the dialog by pressing `Escape`. |
| **`hideOnClickOutside`** | `boolean | undefined` | When enabled, user can hide the dialog by clicking outside it. |
| **`preventBodyScroll`** | `boolean | undefined` | When enabled, user can't scroll on body when the dialog is visible.<br>This option doesn't work if the dialog isn't modal. |
| **`unstable_initialFocusRef`** | `React.RefObject<HTMLElement> | undefined` | The element that will be focused when the dialog shows.<br>When not set, the first tabbable element within the dialog will be used.<br>`autoFocusOnShow` disables it. |
| **`unstable_finalFocusRef`** | `React.RefObject<HTMLElement> | undefined` | The element that will be focused when the dialog hides.<br>When not set, the disclosure component will be used.<br>`autoFocusOnHide` disables it. |
| **`unstable_referenceRef`** | `React.RefObject<HTMLElement | null>` | The reference element. |
| **`unstable_popoverRef`** | `React.RefObject<HTMLElement | null>` | The popover element. |
| **`unstable_arrowRef`** | `React.RefObject<HTMLElement | null>` | The arrow element. |
| **`unstable_popoverStyles`** | `Partial<CSSStyleDeclaration>` | Popover styles. |
| **`unstable_arrowStyles`** | `Partial<CSSStyleDeclaration>` | Arrow styles. |
| **`unstable_originalPlacement`** | `default.Placement` | `placement` passed to the hook. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_stops`** | `Stop[]` | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_pastId`** | `string | null` | The last focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`unstable_values`** | `Record<string, any>` | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | `(id: string) => void` | Unregisters the roving item. |
| **`unstable_move`** | `(id: string | null) => void` | Moves focus onto a given element ID. |
| **`unstable_next`** | `() => void` | Moves focus onto the next element. |
| **`unstable_previous`** | `() => void` | Moves focus onto the previous element. |
| **`unstable_first`** | `() => void` | Moves focus onto the first element. |
| **`unstable_last`** | `() => void` | Moves focus onto the last element. |
| **`unstable_reset`** | `() => void` | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`unstable_update`** | `(name: string, value?: any) => void` | TODO: Description |

### `MenuDisclosure`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | `boolean | undefined` | Same as the HTML attribute. |
| **`unstable_focusable`** | `boolean | undefined` | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | `string[] | undefined` | Keyboard keys to trigger click. |
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
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_stops`** | `Stop[]` | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_pastId`** | `string | null` | The last focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`unstable_values`** | `Record<string, any>` | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | `(id: string) => void` | Unregisters the roving item. |
| **`unstable_move`** | `(id: string | null) => void` | Moves focus onto a given element ID. |
| **`unstable_next`** | `() => void` | Moves focus onto the next element. |
| **`unstable_previous`** | `() => void` | Moves focus onto the previous element. |
| **`unstable_first`** | `() => void` | Moves focus onto the first element. |
| **`unstable_last`** | `() => void` | Moves focus onto the last element. |
| **`unstable_reset`** | `() => void` | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`unstable_update`** | `(name: string, value?: any) => void` | TODO: Description |

### `MenuGroup`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_stops`** | `Stop[]` | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_pastId`** | `string | null` | The last focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`unstable_referenceRef`** | `React.RefObject<HTMLElement | null>` | The reference element. |
| **`unstable_popoverRef`** | `React.RefObject<HTMLElement | null>` | The popover element. |
| **`unstable_arrowRef`** | `React.RefObject<HTMLElement | null>` | The arrow element. |
| **`unstable_popoverStyles`** | `Partial<CSSStyleDeclaration>` | Popover styles. |
| **`unstable_arrowStyles`** | `Partial<CSSStyleDeclaration>` | Arrow styles. |
| **`unstable_originalPlacement`** | `default.Placement` | `placement` passed to the hook. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`unstable_values`** | `Record<string, any>` | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | `(id: string) => void` | Unregisters the roving item. |
| **`unstable_move`** | `(id: string | null) => void` | Moves focus onto a given element ID. |
| **`unstable_next`** | `() => void` | Moves focus onto the next element. |
| **`unstable_previous`** | `() => void` | Moves focus onto the previous element. |
| **`unstable_first`** | `() => void` | Moves focus onto the first element. |
| **`unstable_last`** | `() => void` | Moves focus onto the last element. |
| **`unstable_reset`** | `() => void` | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | `(name: string, value?: any) => void` | TODO: Description |

### `MenuItem`

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
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`unstable_referenceRef`** | `React.RefObject<HTMLElement | null>` | The reference element. |
| **`unstable_popoverRef`** | `React.RefObject<HTMLElement | null>` | The popover element. |
| **`unstable_arrowRef`** | `React.RefObject<HTMLElement | null>` | The arrow element. |
| **`unstable_popoverStyles`** | `Partial<CSSStyleDeclaration>` | Popover styles. |
| **`unstable_arrowStyles`** | `Partial<CSSStyleDeclaration>` | Arrow styles. |
| **`unstable_originalPlacement`** | `default.Placement` | `placement` passed to the hook. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`unstable_values`** | `Record<string, any>` | TODO: Description |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | `(name: string, value?: any) => void` | TODO: Description |

### `MenuItemCheckbox`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | `boolean | undefined` | Same as the HTML attribute. |
| **`unstable_focusable`** | `boolean | undefined` | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | `string[] | undefined` | Keyboard keys to trigger click. |
| **`currentValue`** | `boolean | any[] | "indeterminate"` | Stores the state of the checkbox.<br>If checkboxes that share this state have defined a `value` prop, it's<br>going to be an array. |
| **`setValue`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Checkbox/CheckboxState.ts#L18) | Sets `currentValue`. |
| **`value`** | `any` | Checkbox's value is going to be used when multiple checkboxes share the<br>same state. Checking a checkbox with value will add it to the state<br>array. |
| **`checked`** | `boolean | undefined` | Checkbox's checked state. If present, it's used instead of currentValue. |
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
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`unstable_referenceRef`** | `React.RefObject<HTMLElement | null>` | The reference element. |
| **`unstable_popoverRef`** | `React.RefObject<HTMLElement | null>` | The popover element. |
| **`unstable_arrowRef`** | `React.RefObject<HTMLElement | null>` | The arrow element. |
| **`unstable_popoverStyles`** | `Partial<CSSStyleDeclaration>` | Popover styles. |
| **`unstable_arrowStyles`** | `Partial<CSSStyleDeclaration>` | Arrow styles. |
| **`unstable_originalPlacement`** | `default.Placement` | `placement` passed to the hook. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`unstable_values`** | `Record<string, any>` | TODO: Description |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | `(name: string, value?: any) => void` | TODO: Description |
| **`name`** | `string` | TODO: Description |

### `MenuItemRadio`

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
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`unstable_referenceRef`** | `React.RefObject<HTMLElement | null>` | The reference element. |
| **`unstable_popoverRef`** | `React.RefObject<HTMLElement | null>` | The popover element. |
| **`unstable_arrowRef`** | `React.RefObject<HTMLElement | null>` | The arrow element. |
| **`unstable_popoverStyles`** | `Partial<CSSStyleDeclaration>` | Popover styles. |
| **`unstable_arrowStyles`** | `Partial<CSSStyleDeclaration>` | Arrow styles. |
| **`unstable_originalPlacement`** | `default.Placement` | `placement` passed to the hook. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`unstable_values`** | `Record<string, any>` | TODO: Description |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | `(name: string, value?: any) => void` | TODO: Description |
| **`name`** | `string` | TODO: Description |

### `MenuSeparator`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_stops`** | `Stop[]` | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_pastId`** | `string | null` | The last focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`unstable_referenceRef`** | `React.RefObject<HTMLElement | null>` | The reference element. |
| **`unstable_popoverRef`** | `React.RefObject<HTMLElement | null>` | The popover element. |
| **`unstable_arrowRef`** | `React.RefObject<HTMLElement | null>` | The arrow element. |
| **`unstable_popoverStyles`** | `Partial<CSSStyleDeclaration>` | Popover styles. |
| **`unstable_arrowStyles`** | `Partial<CSSStyleDeclaration>` | Arrow styles. |
| **`unstable_originalPlacement`** | `default.Placement` | `placement` passed to the hook. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`unstable_values`** | `Record<string, any>` | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | `(id: string) => void` | Unregisters the roving item. |
| **`unstable_move`** | `(id: string | null) => void` | Moves focus onto a given element ID. |
| **`unstable_next`** | `() => void` | Moves focus onto the next element. |
| **`unstable_previous`** | `() => void` | Moves focus onto the previous element. |
| **`unstable_first`** | `() => void` | Moves focus onto the first element. |
| **`unstable_last`** | `() => void` | Moves focus onto the last element. |
| **`unstable_reset`** | `() => void` | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | `(name: string, value?: any) => void` | TODO: Description |

### `StaticMenu`

| Name | Type | Description |
|------|------|-------------|
| **`orientation`** | `"horizontal" | "vertical" | undefined` | Defines the orientation of the rover list. |
| **`unstable_stops`** | `Stop[]` | A list of element refs and IDs of the roving items. |
| **`unstable_currentId`** | `string | null` | The current focused element ID. |
| **`unstable_pastId`** | `string | null` | The last focused element ID. |
| **`unstable_loop`** | `boolean` | If enabled, the next item after the last one will be the first one. |
| **`visible`** | `boolean` | Whether it's visible or not. |
| **`unstable_referenceRef`** | `React.RefObject<HTMLElement | null>` | The reference element. |
| **`unstable_popoverRef`** | `React.RefObject<HTMLElement | null>` | The popover element. |
| **`unstable_arrowRef`** | `React.RefObject<HTMLElement | null>` | The arrow element. |
| **`unstable_popoverStyles`** | `Partial<CSSStyleDeclaration>` | Popover styles. |
| **`unstable_arrowStyles`** | `Partial<CSSStyleDeclaration>` | Arrow styles. |
| **`unstable_originalPlacement`** | `default.Placement` | `placement` passed to the hook. |
| **`placement`** | `default.Placement` | Actual `placement`. |
| **`unstable_values`** | `Record<string, any>` | TODO: Description |
| **`unstable_register`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L39) | Registers the element ID and ref in the roving tab index list. |
| **`unstable_unregister`** | `(id: string) => void` | Unregisters the roving item. |
| **`unstable_move`** | `(id: string | null) => void` | Moves focus onto a given element ID. |
| **`unstable_next`** | `() => void` | Moves focus onto the next element. |
| **`unstable_previous`** | `() => void` | Moves focus onto the previous element. |
| **`unstable_first`** | `() => void` | Moves focus onto the first element. |
| **`unstable_last`** | `() => void` | Moves focus onto the last element. |
| **`unstable_reset`** | `() => void` | Resets `currentId` and `pastId` states. |
| **`unstable_orientate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Rover/RoverState.ts#L71) | Changes the `orientation` state of the roving tab index list. |
| **`show`** | `() => void` | Changes the `visible` state to `true` |
| **`hide`** | `() => void` | Changes the `visible` state to `false` |
| **`toggle`** | `() => void` | Toggles the `visible` state |
| **`place`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Popover/PopoverState.ts#L48) | Change the `placement` state. |
| **`unstable_update`** | `(name: string, value?: any) => void` | TODO: Description |
