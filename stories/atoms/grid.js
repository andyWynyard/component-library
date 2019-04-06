import React from 'react'
import './style.css'

import Grid from '../../src/lib/components/atoms/grid'

const { Container } = Grid

const heading = () => {
  return (
    <div className="storybook-wrapper">
      <Container style={{ backgroundColor: 'red', minHeight: '200vh' }}>
        This is a grid
      </Container>
    </div>
  )
}

export default heading
