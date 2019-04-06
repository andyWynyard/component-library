# Table Component

`npm i @andy-wynyard/skeleton-react`

`import { Table } from '@andy-wynyard/skeleton-react'`

`const { Td, Th } = Table`

Table is full width of its parent element. The `<Th />` and `<Td />` elements have `padding-left: 0` on the first row element, and `padding-right: 0` on the last row element.

The `<thead />`, `<tbody />` and `<tr />` are the basic `HTML` elements.

```
 <Table>
  <thead>
    <tr>
      <Th>Name</Th>
      <Th>Age</Th>
      <Th>Sex</Th>
      <Th>Location</Th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <Td>Dave Gamache</Td>
      <Td>26</Td>
      <Td>Male</Td>
      <Td>San Francisco</Td>
    </tr>
    <tr>
      <Td>Dwayne Johnson</Td>
      <Td>42</Td>
      <Td>Male</Td>
      <Td>Hayward</Td>
    </tr>
  </tbody>
</Table>
```
