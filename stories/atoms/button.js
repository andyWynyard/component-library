import React from 'react'

import { boolean, text } from '@storybook/addon-knobs/react'

import Button from '../../src/lib/components/atoms/button'

import './style.css'

const button = () => {
  const innerText = text('Text', 'Hi there')
  const primary = boolean('Primary', false)

  return (
    <div className={`storybook-wrapper`}>
      <Button primary={primary}>{innerText}</Button>
    </div>
  )
}

export default button
