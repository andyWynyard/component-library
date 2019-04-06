import React, { useState, createElement } from 'react'
import { boolean, text, select } from '@storybook/addon-knobs/react'

import TextArea from '../../src/lib/components/atoms/textArea'
import './style.css'

const textArea = () =>
  createElement(() => {
    const [valueState, setvalueState] = useState('Hi there')

    const value = text('Value', valueState)
    const placeholder = text('Placeholder', 'Placeholder text for this element')

    return (
      <div className={`storybook-wrapper`}>
        <TextArea
          onChange={e => setvalueState(e.target.value)}
          value={value}
          placeholder={placeholder}
        />
      </div>
    )
  })

export default textArea
