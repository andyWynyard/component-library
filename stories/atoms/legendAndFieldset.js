import React from 'react'
import Legend from '../../src/lib/components/atoms/legend'
import Fieldset from '../../src/lib/components/atoms/fieldset'
import Label from '../../src/lib/components/atoms/label'
import Input from '../../src/lib/components/atoms/input'

import './style.css'

const legendAndFieldset = () => {
  return (
    <div className="storybook-wrapper">
      <Fieldset>
        <Legend>Personalia:</Legend>
        <Label htmlFor="inputStuff">Send a copy to yourself</Label>
        <Input id="inputStuff" type="text" />
        <Input id="checkbox" type="checkbox" />
        <Label inline htmlFor="checkbox">
          Send a copy to yourself
        </Label>
      </Fieldset>
    </div>
  )
}

export default legendAndFieldset
