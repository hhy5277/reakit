---
path: /docs/checkbox
---

# Checkbox

## Usage

```jsx
import React from "react";
import { Checkbox } from "reakit";

function Example() {
  const [checked, setChecked] = React.useState(false);
  const toggle = () => setChecked(!checked);
  return <Checkbox checked={checked} onChange={toggle} />;
}
```

```jsx
import { Checkbox, useCheckboxState } from "reakit";

function Example() {
  const checkbox = useCheckboxState();
  return <Checkbox {...checkbox} />;
}
```

```jsx
import { Checkbox, useCheckboxState } from "reakit";

function Example() {
  const checkbox = useCheckboxState({ currentValue: ["apple"] });

  return (
    <div role="group">
      <Checkbox {...checkbox} value="apple" />
      <Checkbox
        {...checkbox}
        as="div"
        style={{ width: 20, height: 20, background: "red" }}
        value="orange"
      />
      <Checkbox {...checkbox} value="watermelon" />
    </div>
  );
}
```

## Props

<!-- This generated automatically -->

### `useCheckboxState`

| Name | Type | Description |
|------|------|-------------|
| **`currentValue`** | `boolean | any[] | "indeterminate"` | Stores the state of the checkbox.<br>If checkboxes that share this state have defined a `value` prop, it's<br>going to be an array. |

### `Checkbox`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | `boolean | undefined` | Same as the HTML attribute. |
| **`unstable_focusable`** | `boolean | undefined` | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | `string[] | undefined` | Keyboard keys to trigger click. |
| **`currentValue`** | `boolean | any[] | "indeterminate"` | Stores the state of the checkbox.<br>If checkboxes that share this state have defined a `value` prop, it's<br>going to be an array. |
| **`setValue`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Checkbox/CheckboxState.ts#L18) | Sets `currentValue`. |
| **`value`** | `any` | Checkbox's value is going to be used when multiple checkboxes share the<br>same state. Checking a checkbox with value will add it to the state<br>array. |
| **`checked`** | `boolean | undefined` | Checkbox's checked state. If present, it's used instead of currentValue. |
