import React from 'react'

import 'typeface-raleway'

import { boolean, object, text } from '@storybook/addon-knobs/react'
import { withNotes } from '@storybook/addon-notes'

import instructions from './markdown/button.md'
import Button from '../../src/lib/components/atoms/button'

const button = () => {
  const innerText = text('Text', 'Hi there')
  const primary = boolean('Primary', false)

  return (
    <div style={{ padding: '20px' }}>
      <Button primary={primary}>{innerText}</Button>
    </div>
  )
}

export default button
