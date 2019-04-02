// import 'typeface-roboto'

import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs/react'

import heading from './atoms/heading'
import paragraph from './atoms/paragraph'
import button from './atoms/button'

const stories = storiesOf('Components|Atoms', module)

stories.addDecorator(withKnobs)
stories.addDecorator(checkA11y)

stories
  .add('Button', button)
  .add('Heading', heading)
  .add('Paragraph', paragraph)
