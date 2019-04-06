import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs/react'

import heading from './atoms/heading'
import paragraph from './atoms/paragraph'
import button from './atoms/button'
import input from './atoms/input'
import textArea from './atoms/textArea'
import list from './atoms/list'
import label from './atoms/label'

import headingNotes from './atoms/markdown/heading.md'
import buttonNotes from './atoms/markdown/button.md'
import paragraphNotes from './atoms/markdown/paragraph.md'
import inputNotes from './atoms/markdown/input.md'
import textAreaNotes from './atoms/markdown/textArea.md'
import listNotes from './atoms/markdown/list.md'
import labelNotes from './atoms/markdown/label.md'

const stories = storiesOf('Components|Atoms', module)

stories.addDecorator(withKnobs)
stories.addDecorator(checkA11y)

stories
  .add('Button', button, { notes: buttonNotes })
  .add('Heading', heading, { notes: headingNotes })
  .add('Input', input, { notes: inputNotes })
  .add('Label', label, { notes: labelNotes })
  .add('List', list, { notes: listNotes })
  .add('Paragraph', paragraph, { notes: paragraphNotes })
  .add('Text Area', textArea, { notes: textAreaNotes })
