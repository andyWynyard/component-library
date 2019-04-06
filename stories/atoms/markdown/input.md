# Input Component

`npm i @andy-wynyard/skeleton-react`

`import { Input } from '@andy-wynyard/skeleton-react'`

## Props

- type
- value (for use with state)
- placeholder

Input component can be of any input type. The styling will move around it. It has a `{...props}` element so anything can be placed on it, as has the example below with the `onChange={}` prop.

If the type is **not** of a clickable type (`button`, `submit`, `reset`) this component is set with `width: '100%';` so that will will expand across the full width of any wrapper component. The clickable components will expand depending on what text is inside them.

Types include `[ 'email', 'number', 'search', 'text', 'tel', 'url', 'password', 'submit', 'reset', 'button', ],`

```
<Input
  onChange={e => setvalueState(e.target.value)}
  type={type}
  value={value}
  placeholder={placeholder}
  primary={primary}
/>
```
