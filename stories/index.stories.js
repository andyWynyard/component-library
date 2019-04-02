import 'typeface-roboto'

import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs/react'

import button from './atoms/button'
import errorText from './atoms/errorText'
import heading1 from './atoms/heading1'
import heading from './atoms/heading'
import heading2 from './atoms/heading2'
import heading3 from './atoms/heading3'
import heading4 from './atoms/heading4'
import input from './atoms/input'
import link from './atoms/link'
import loadingIcon from './atoms/loadingIcon'

const stories = storiesOf('Maverick|Atoms', module)

stories.addDecorator(withKnobs)
stories.addDecorator(checkA11y)

stories
  .add('Button', button)
  .add('ErrorText', errorText)
  .add('Heading1', heading1)
  .add('Heading', heading)
  .add('Heading2', heading2)
  .add('Heading3', heading3)
  .add('Heading4', heading4)
  .add('Input', input)
  .add('Link', link)
  .add('Loading Icon', loadingIcon)
