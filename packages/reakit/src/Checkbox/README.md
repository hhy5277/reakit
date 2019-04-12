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

<!-- Automatically generated -->

### `useCheckboxState`

| Name | Type | Description |
|------|------|-------------|
| **`currentValue`** | <code>boolean &#124; any[] &#124; "indeterminate"</code> | Stores the state of the checkbox. If checkboxes that share this state have defined a `value` prop, it's going to be an array. |

### `Checkbox`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`currentValue`** | <code>boolean &#124; any[] &#124; "indeterminate"</code> | Stores the state of the checkbox. If checkboxes that share this state have defined a `value` prop, it's going to be an array. |
| **`setValue`** | <code>(value: SetStateAction<boolean &#124; any[] &#124; "indeterminate">) => void</code> | Sets `currentValue`. |
| **`value`** | <code>any</code> | Checkbox's value is going to be used when multiple checkboxes share the same state. Checking a checkbox with value will add it to the state array. |
| **`checked`** | <code>boolean &#124; undefined</code> | Checkbox's checked state. If present, it's used instead of currentValue. |
