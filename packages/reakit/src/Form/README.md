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

<!-- This generated automatically -->

### `useFormState`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`validateOnBlur`** | `boolean | undefined` | TODO: Description |
| **`validateOnChange`** | `boolean | undefined` | TODO: Description |
| **`resetOnSubmitSucceed`** | `boolean | undefined` | TODO: Description |
| **`resetOnUnmount`** | `boolean | undefined` | TODO: Description |
| **`onValidate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L86) | TODO: Description |
| **`onSubmit`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L88) | TODO: Description |

### `Form`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`touched`** | `DeepPartial<DeepMap<V, boolean>>` | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L39) | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L41) | TODO: Description |
| **`validating`** | `boolean` | TODO: Description |
| **`valid`** | `boolean` | TODO: Description |
| **`submitting`** | `boolean` | TODO: Description |
| **`submitSucceed`** | `number` | TODO: Description |
| **`submitFailed`** | `number` | TODO: Description |
| **`reset`** | `() => void` | TODO: Description |
| **`validate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L58) | TODO: Description |
| **`submit`** | `() => void` | TODO: Description |
| **`update`** | `Update<V>` | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L64) | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L66-L69) | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L71) | TODO: Description |

### `FormCheckbox`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | `boolean | undefined` | Same as the HTML attribute. |
| **`unstable_focusable`** | `boolean | undefined` | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | `string[] | undefined` | Keyboard keys to trigger click. |
| **`currentValue`** | `boolean | any[] | "indeterminate"` | Stores the state of the checkbox.<br>If checkboxes that share this state have defined a `value` prop, it's<br>going to be an array. |
| **`setValue`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Checkbox/CheckboxState.ts#L18) | Sets `currentValue`. |
| **`checked`** | `boolean | undefined` | Checkbox's checked state. If present, it's used instead of currentValue. |
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`touched`** | `DeepPartial<DeepMap<V, boolean>>` | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L39) | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L41) | TODO: Description |
| **`validating`** | `boolean` | TODO: Description |
| **`valid`** | `boolean` | TODO: Description |
| **`submitting`** | `boolean` | TODO: Description |
| **`submitSucceed`** | `number` | TODO: Description |
| **`submitFailed`** | `number` | TODO: Description |
| **`reset`** | `() => void` | TODO: Description |
| **`validate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L58) | TODO: Description |
| **`submit`** | `() => void` | TODO: Description |
| **`update`** | `Update<V>` | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L64) | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L66-L69) | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L71) | TODO: Description |
| **`name`** | `P` | TODO: Description |
| **`value`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormCheckbox.ts#L33) | TODO: Description |

### `FormGroup`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`touched`** | `DeepPartial<DeepMap<V, boolean>>` | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L39) | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L41) | TODO: Description |
| **`validating`** | `boolean` | TODO: Description |
| **`valid`** | `boolean` | TODO: Description |
| **`submitting`** | `boolean` | TODO: Description |
| **`submitSucceed`** | `number` | TODO: Description |
| **`submitFailed`** | `number` | TODO: Description |
| **`reset`** | `() => void` | TODO: Description |
| **`validate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L58) | TODO: Description |
| **`submit`** | `() => void` | TODO: Description |
| **`update`** | `Update<V>` | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L64) | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L66-L69) | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L71) | TODO: Description |
| **`name`** | `P` | TODO: Description |

### `FormInput`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | `boolean | undefined` | Same as the HTML attribute. |
| **`unstable_focusable`** | `boolean | undefined` | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | `string[] | undefined` | Keyboard keys to trigger click. |
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`touched`** | `DeepPartial<DeepMap<V, boolean>>` | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L39) | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L41) | TODO: Description |
| **`validating`** | `boolean` | TODO: Description |
| **`valid`** | `boolean` | TODO: Description |
| **`submitting`** | `boolean` | TODO: Description |
| **`submitSucceed`** | `number` | TODO: Description |
| **`submitFailed`** | `number` | TODO: Description |
| **`reset`** | `() => void` | TODO: Description |
| **`validate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L58) | TODO: Description |
| **`submit`** | `() => void` | TODO: Description |
| **`update`** | `Update<V>` | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L64) | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L66-L69) | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L71) | TODO: Description |
| **`name`** | `P` | TODO: Description |

### `FormLabel`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`touched`** | `DeepPartial<DeepMap<V, boolean>>` | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L39) | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L41) | TODO: Description |
| **`validating`** | `boolean` | TODO: Description |
| **`valid`** | `boolean` | TODO: Description |
| **`submitting`** | `boolean` | TODO: Description |
| **`submitSucceed`** | `number` | TODO: Description |
| **`submitFailed`** | `number` | TODO: Description |
| **`reset`** | `() => void` | TODO: Description |
| **`validate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L58) | TODO: Description |
| **`submit`** | `() => void` | TODO: Description |
| **`update`** | `Update<V>` | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L64) | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L66-L69) | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L71) | TODO: Description |
| **`name`** | `P` | TODO: Description |
| **`label`** | `any` | TODO: Description |

### `FormMessage`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`touched`** | `DeepPartial<DeepMap<V, boolean>>` | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L39) | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L41) | TODO: Description |
| **`validating`** | `boolean` | TODO: Description |
| **`valid`** | `boolean` | TODO: Description |
| **`submitting`** | `boolean` | TODO: Description |
| **`submitSucceed`** | `number` | TODO: Description |
| **`submitFailed`** | `number` | TODO: Description |
| **`reset`** | `() => void` | TODO: Description |
| **`validate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L58) | TODO: Description |
| **`submit`** | `() => void` | TODO: Description |
| **`update`** | `Update<V>` | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L64) | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L66-L69) | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L71) | TODO: Description |
| **`name`** | `P` | TODO: Description |

### `FormPushButton`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | `boolean | undefined` | Same as the HTML attribute. |
| **`unstable_focusable`** | `boolean | undefined` | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | `string[] | undefined` | Keyboard keys to trigger click. |
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`touched`** | `DeepPartial<DeepMap<V, boolean>>` | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L39) | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L41) | TODO: Description |
| **`validating`** | `boolean` | TODO: Description |
| **`valid`** | `boolean` | TODO: Description |
| **`submitting`** | `boolean` | TODO: Description |
| **`submitSucceed`** | `number` | TODO: Description |
| **`submitFailed`** | `number` | TODO: Description |
| **`reset`** | `() => void` | TODO: Description |
| **`validate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L58) | TODO: Description |
| **`submit`** | `() => void` | TODO: Description |
| **`update`** | `Update<V>` | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L64) | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L66-L69) | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L71) | TODO: Description |
| **`name`** | `P` | TODO: Description |
| **`value`** | `ArrayValue<DeepPathValue<V, P>>` | TODO: Description |

### `FormRadio`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`touched`** | `DeepPartial<DeepMap<V, boolean>>` | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L39) | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L41) | TODO: Description |
| **`validating`** | `boolean` | TODO: Description |
| **`valid`** | `boolean` | TODO: Description |
| **`submitting`** | `boolean` | TODO: Description |
| **`submitSucceed`** | `number` | TODO: Description |
| **`submitFailed`** | `number` | TODO: Description |
| **`reset`** | `() => void` | TODO: Description |
| **`validate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L58) | TODO: Description |
| **`submit`** | `() => void` | TODO: Description |
| **`update`** | `Update<V>` | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L64) | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L66-L69) | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L71) | TODO: Description |
| **`name`** | `P` | TODO: Description |
| **`value`** | `DeepPathValue<V, P>` | TODO: Description |

### `FormRadioGroup`

| Name | Type | Description |
|------|------|-------------|
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`touched`** | `DeepPartial<DeepMap<V, boolean>>` | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L39) | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L41) | TODO: Description |
| **`validating`** | `boolean` | TODO: Description |
| **`valid`** | `boolean` | TODO: Description |
| **`submitting`** | `boolean` | TODO: Description |
| **`submitSucceed`** | `number` | TODO: Description |
| **`submitFailed`** | `number` | TODO: Description |
| **`reset`** | `() => void` | TODO: Description |
| **`validate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L58) | TODO: Description |
| **`submit`** | `() => void` | TODO: Description |
| **`update`** | `Update<V>` | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L64) | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L66-L69) | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L71) | TODO: Description |
| **`name`** | `P` | TODO: Description |

### `FormRemoveButton`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | `boolean | undefined` | Same as the HTML attribute. |
| **`unstable_focusable`** | `boolean | undefined` | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | `string[] | undefined` | Keyboard keys to trigger click. |
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`touched`** | `DeepPartial<DeepMap<V, boolean>>` | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L39) | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L41) | TODO: Description |
| **`validating`** | `boolean` | TODO: Description |
| **`valid`** | `boolean` | TODO: Description |
| **`submitting`** | `boolean` | TODO: Description |
| **`submitSucceed`** | `number` | TODO: Description |
| **`submitFailed`** | `number` | TODO: Description |
| **`reset`** | `() => void` | TODO: Description |
| **`validate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L58) | TODO: Description |
| **`submit`** | `() => void` | TODO: Description |
| **`update`** | `Update<V>` | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L64) | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L66-L69) | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L71) | TODO: Description |
| **`name`** | `P` | TODO: Description |
| **`index`** | `number` | TODO: Description |

### `FormSubmitButton`

| Name | Type | Description |
|------|------|-------------|
| **`disabled`** | `boolean | undefined` | Same as the HTML attribute. |
| **`unstable_focusable`** | `boolean | undefined` | When an element is `disabled`, it may still be `focusable`.<br>In this case, only `aria-disabled` will be set. |
| **`unstable_clickKeys`** | `string[] | undefined` | Keyboard keys to trigger click. |
| **`baseId`** | `string` | TODO: Description |
| **`values`** | `V` | TODO: Description |
| **`touched`** | `DeepPartial<DeepMap<V, boolean>>` | TODO: Description |
| **`messages`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L39) | TODO: Description |
| **`errors`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L41) | TODO: Description |
| **`validating`** | `boolean` | TODO: Description |
| **`valid`** | `boolean` | TODO: Description |
| **`submitting`** | `boolean` | TODO: Description |
| **`submitSucceed`** | `number` | TODO: Description |
| **`submitFailed`** | `number` | TODO: Description |
| **`reset`** | `() => void` | TODO: Description |
| **`validate`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L58) | TODO: Description |
| **`submit`** | `() => void` | TODO: Description |
| **`update`** | `Update<V>` | TODO: Description |
| **`blur`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L64) | TODO: Description |
| **`push`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L66-L69) | TODO: Description |
| **`remove`** | [source](https://github.com/reakit/reakit/tree/master/packages/reakit/src/Form/FormState.ts#L71) | TODO: Description |
