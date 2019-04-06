import React from 'react'

import { text, select } from '@storybook/addon-knobs/react'

import Paragraph from '../../src/lib/components/atoms/paragraph'

import './style.css'
const paragraph = () => {
  const innerText = text('innerText', 'Hi there')
  return (
    <div className="storybook-wrapper">
      <Paragraph>{innerText}</Paragraph>
    </div>
  )
}

export default paragraph
