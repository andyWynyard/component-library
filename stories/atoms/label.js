import React from 'react'
import Label from '../../src/lib/components/atoms/label'
import Input from '../../src/lib/components/atoms/input'

import './style.css'

const label = () => {
  return (
    <div className="storybook-wrapper">
      <h3>Label for checkbox (left margin)</h3>
      <Input id="checkbox" type="checkbox" />
      <Label inline htmlFor="checkbox">
        Send a copy to yourself
      </Label>
      <h3>Label for input (bottom margin)</h3>
      <Label htmlFor="inputStuff">Send a copy to yourself</Label>
      <Input id="inputStuff" type="text" />
    </div>
  )
}

export default label
