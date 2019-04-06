import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs/react'

import heading from './atoms/heading'
import paragraph from './atoms/paragraph'
import button from './atoms/button'
import input from './atoms/input'

import headingNotes from './atoms/markdown/heading.md'
import buttonNotes from './atoms/markdown/button.md'
import paragraphNotes from './atoms/markdown/paragraph.md'

const stories = storiesOf('Components|Atoms', module)

stories.addDecorator(withKnobs)
stories.addDecorator(checkA11y)

stories
  .add('Button', button, { notes: buttonNotes })
  .add('Heading', heading, { notes: headingNotes })
  .add('Input', input, { notes: headingNotes })
  .add('Paragraph', paragraph, { notes: paragraphNotes })
