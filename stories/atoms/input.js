import React, { useState, createElement } from 'react'

import { boolean, text, select } from '@storybook/addon-knobs/react'

import Input from '../../src/lib/components/atoms/input'

import './style.css'

const input = () =>
  createElement(() => {
    const [valueState, setvalueState] = useState('Hi there')

    const value = text('Value', valueState)
    const placeholder = text('Placeholder', 'Hi there')
    const primary = boolean('Primary', false)
    const type = select(
      'Type',
      [
        'email',
        'number',
        'search',
        'text',
        'tel',
        'url',
        'password',
        'submit',
        'reset',
        'button',
      ],
      'text'
    )

    return (
      <div className={`storybook-wrapper`}>
        <Input
          onChange={e => setvalueState(e.target.value)}
          type={type}
          value={value}
          placeholder={placeholder}
          primary={primary}
        />
      </div>
    )
  })
export default input
