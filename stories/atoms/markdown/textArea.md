# TextArea Component

`npm i @andy-wynyard/skeleton-react`

`import { TextArea } from '@andy-wynyard/skeleton-react'`

## Props

- value (for use with state)
- placeholder

This component is set with `width: '100%';` so that will will expand across the full width of any wrapper component.

```
<TextArea
  onChange={e => setvalueState(e.target.value)}
  value={value}
  placeholder={placeholder}
/>
```
