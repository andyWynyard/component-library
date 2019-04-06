# Legend and Fieldset Component

`npm i @andy-wynyard/skeleton-react`

`import { Legend, Fieldset } from '@andy-wynyard/skeleton-react'`

Used to group related elements within a form. This legend will have for a slight padding on either side, and a very small margin at the bottom to separate it from the elements.

The `<Fieldset>{children}</Fieldset>` will group up the `<Legend>Heading</Legend>` and the form elements that go with it within the `<form>` component. The `<Fieldset />` componet purposely has a `margin-bottom: 1.5rem;`

```
<form>
  <Fieldset>
    <Legend>Personalia:</Legend>
    <Label htmlFor="inputStuff">Send a copy to yourself</Label>
    <Input id="inputStuff" type="text" />
    <Input id="checkbox" type="checkbox" />
    <Label inline htmlFor="checkbox">
      Send a copy to yourself
    </Label>
  </Fieldset>
</form>
```
