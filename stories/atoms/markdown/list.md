# Lists

`npm i @andy-wynyard/skeleton-react`

`import { List } from '@andy-wynyard/skeleton-react'`

Nice wee `<List>{children}</List>` component to make organisig lists a wee bit easier.

## Props

- tag (is it an `ol` or a `ul`)
- children
- className

Lists can be nested without a peroblem, and the `<li>` component is part of the main `<List />` component.

```
 <List tag="ol">
  <List tag="ul">
    <List.Item>Hi there</List.Item>
    <List.Item>Hi there</List.Item>
  </List>
  <List.Item>Hi there</List.Item>
  <List.Item>Hi there</List.Item>
  <List.Item>Hi there</List.Item>
  <List.Item>Hi there</List.Item>
</List>
```
