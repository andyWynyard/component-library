# Heading Component

`npm i @andy-wynyard/skeleton-react`

`import { Grid } from '@andy-wynyard/skeleton-react'`

`const { Container, Row, Col } = Grid`

## Props

- The `<Grid />` component does nothing but is used as an import/export mechanism.
- The `<Container />` component has a bunch of styling for the grid. It will center, and have a max width of 1200px unless a `maxWidth={string}` is given, and 20px padding left and right, as well as width % on larger devices.
- `<Row />` has no props, other than `className={}` for overriding. It has basic styling for being a wrapper.
- `<Col columns={string} offset={string}>{children}</Col>` is where all the magic happens, and is how you control things. Please do the math, and dont do something like `offset={'6'}` and `columns={'8'}`. Its also automatically set so that on mobile they will all be full width.

```
<Container>
   <Row>
    <Col columns="6" offset="6">
      6 offset 6
    </Col>
  </Row>
</Container>
```
