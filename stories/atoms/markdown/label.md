# label Component for inputs

`npm i @andy-wynyard/skeleton-react`

`import { Label } from '@andy-wynyard/skeleton-react'`

## Props

- `inline` which is a boolean. This takes away the bottom margin and put some to the left for checkboxes and radio buttons. It also gives it a lighter weight.

```
  <h3>Label for checkbox (left margin)</h3>
  <Input id="checkbox" type="checkbox" />
  <Label inline htmlFor="checkbox">
    Send a copy to yourself
  </Label>

  <h3>Label for input (bottom margin)</h3>
  <Label htmlFor="inputStuff">Send a copy to yourself</Label>
  <Input id="inputStuff" type="text" />
```
