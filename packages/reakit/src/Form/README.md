---
path: /docs/form
redirect_from:
  - /components/field
  - /components/input
  - /components/label
---

# Form

## Usage

```jsx
import {
  Group,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormCheckbox as FormCheckbox,
  unstable_FormGroup as FormGroup,
  unstable_FormRadioGroup as FormRadioGroup,
  unstable_FormRadio as FormRadio,
  unstable_FormRemoveButton as FormRemoveButton,
  unstable_FormPushButton as FormPushButton,
  unstable_FormSubmitButton as FormSubmitButton,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_useFormState as useFormState
} from "reakit";

function Example() {
  const form = useFormState({
    values: {
      name: "",
      emails: [],
      accepted: false,
      preferences: [],
      choice: ""
    },
    onValidate: values => {
      if (values.name !== "a") {
        const result = { name: "no" };
        throw result;
      }
    }
  });
  return (
    <Form {...form}>
      <FormLabel name="name" {...form}>
        Name
      </FormLabel>
      <FormInput name="name" placeholder="Name" {...form} />
      <FormMessage name="name" {...form} />
      <FormCheckbox name="accepted" {...form} />
      <FormLabel name="accepted" {...form}>
        Accept
      </FormLabel>
      <FormGroup name="preferences" {...form}>
        <FormLabel as="legend" name="preferences" {...form}>
          Preferences
        </FormLabel>
        <label>
          <FormCheckbox name="preferences" value="html" {...form} /> HTML
        </label>
        <label>
          <FormCheckbox name="preferences" value="css" {...form} /> CSS
        </label>
        <label>
          <FormCheckbox name="preferences" value="JS" {...form} /> JS
        </label>
      </FormGroup>
      <FormRadioGroup name="choice" {...form}>
        <FormLabel as="legend" name="choice" {...form}>
          Choice
        </FormLabel>
        <label>
          <FormRadio name="choice" value="html" {...form} /> HTML
        </label>
        <label>
          <FormRadio name="choice" value="css" {...form} /> CSS
        </label>
        <label>
          <FormRadio name="choice" value="js" {...form} /> JS
        </label>
      </FormRadioGroup>
      {form.values.emails.map((_, i) => (
        <Group key={i}>
          <FormInput name={["emails", i, "name"]} {...form} />
          <FormInput type="email" name={["emails", i, "email"]} {...form} />
          <FormRemoveButton name="emails" index={i} {...form}>
            x
          </FormRemoveButton>
        </Group>
      ))}
      <FormPushButton name="emails" value={{ name: "", email: "" }} {...form}>
        Add email
      </FormPushButton>
      <FormSubmitButton {...form}>Subscribe</FormSubmitButton>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </Form>
  );
}
```

## Props

<!-- Automatically generated -->

### `useFormState`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | <code>string</code> | TODO: Description |
| **`values`** | <code>V</code> | TODO: Description |
| **`validateOnBlur`** | <code>boolean &#124; undefined</code> | TODO: Description |
| **`validateOnChange`** | <code>boolean &#124; undefined</code> | TODO: Description |
| **`resetOnSubmitSucceed`** | <code>boolean &#124; undefined</code> | TODO: Description |
| **`resetOnUnmount`** | <code>boolean &#124; undefined</code> | TODO: Description |
| **`onValidate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L130) | TODO: Description |
| **`onSubmit`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L134) | TODO: Description |

### `Form`

| Name | Type | Description |
|------|------|-------------|
| **`submit`** | <code>() => void</code> | TODO: Description |

### `FormCheckbox`

| Name | Type | Description |
|------|------|-------------|
| **`currentValue`** | <code>boolean &#124; any[] &#124; "indeterminate"</code> | Stores the state of the checkbox. If checkboxes that share this state have defined a `value` prop, it's going to be an array. |
| **`setValue`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Checkbox/CheckboxState.ts#L18) | Sets `currentValue`. |
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`checked`** | <code>boolean &#124; undefined</code> | Checkbox's checked state. If present, it's used instead of currentValue. |
| **`baseId`** | <code>string</code> | TODO: Description |
| **`values`** | <code>V</code> | TODO: Description |
| **`update`** | <code>Update<V></code> | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L94) | TODO: Description |
| **`touched`** | <code>DeepPartial<DeepMap<V, boolean>></code> | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L51) | TODO: Description |
| **`name`** | <code>P</code> | TODO: Description |
| **`value`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormCheckbox.ts#L32) | TODO: Description |

### `FormGroup`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | <code>string</code> | TODO: Description |
| **`touched`** | <code>DeepPartial<DeepMap<V, boolean>></code> | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L51) | TODO: Description |
| **`name`** | <code>P</code> | TODO: Description |

### `FormInput`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`baseId`** | <code>string</code> | TODO: Description |
| **`values`** | <code>V</code> | TODO: Description |
| **`update`** | <code>Update<V></code> | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L94) | TODO: Description |
| **`touched`** | <code>DeepPartial<DeepMap<V, boolean>></code> | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L51) | TODO: Description |
| **`name`** | <code>P</code> | TODO: Description |

### `FormLabel`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | <code>string</code> | TODO: Description |
| **`values`** | <code>V</code> | TODO: Description |
| **`name`** | <code>P</code> | TODO: Description |
| **`label`** | <code>any</code> | TODO: Description |

### `FormMessage`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | <code>string</code> | TODO: Description |
| **`touched`** | <code>DeepPartial<DeepMap<V, boolean>></code> | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L51) | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L47) | TODO: Description |
| **`name`** | <code>P</code> | TODO: Description |

### `FormPushButton`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`baseId`** | <code>string</code> | TODO: Description |
| **`values`** | <code>V</code> | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L98-L101) | TODO: Description |
| **`name`** | <code>P</code> | TODO: Description |
| **`value`** | <code>ArrayValue<DeepPathValue<V, P>></code> | TODO: Description |

### `FormRadio`

| Name | Type | Description |
|------|------|-------------|
| **`values`** | <code>V</code> | TODO: Description |
| **`update`** | <code>Update<V></code> | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L94) | TODO: Description |
| **`name`** | <code>P</code> | TODO: Description |
| **`value`** | <code>DeepPathValue<V, P></code> | TODO: Description |

### `FormRadioGroup`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | <code>string</code> | TODO: Description |
| **`touched`** | <code>DeepPartial<DeepMap<V, boolean>></code> | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L51) | TODO: Description |
| **`name`** | <code>P</code> | TODO: Description |

### `FormRemoveButton`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`baseId`** | <code>string</code> | TODO: Description |
| **`values`** | <code>V</code> | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L105) | TODO: Description |
| **`name`** | <code>P</code> | TODO: Description |
| **`index`** | <code>number</code> | TODO: Description |

### `FormSubmitButton`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | <code>boolean &#124; undefined</code> | Same as the HTML attribute. |
| **`unstable_focusable`** | <code>boolean &#124; undefined</code> | When an element is `disabled`, it may still be `focusable`. In this case, only `aria-disabled` will be set. |
| **`submitting`** | <code>boolean</code> | TODO: Description |
| **`baseId`** | <code>string</code> | TODO: Description |
| **`submit`** | <code>() => void</code> | TODO: Description |
