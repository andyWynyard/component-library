import React from 'react'
import './style.css'

import Grid from '../../src/lib/components/atoms/grid'

const { Container, Row, Col } = Grid

const grid = () => {
  return (
    <div className="storybook-wrapper">
      <Container style={{ minHeight: '200vh' }}>
        <Row>
          <Col columns="12" style={{ backgroundColor: '#e6e6e6' }}>
            12
          </Col>
        </Row>
        <Row>
          <Col columns="1" style={{ backgroundColor: '#c3c3c3' }}>
            1
          </Col>
          <Col columns="11" style={{ backgroundColor: '#e6e6e6' }}>
            11
          </Col>
        </Row>
        <Row>
          <Col columns="2" style={{ backgroundColor: '#c3c3c3' }}>
            2
          </Col>
          <Col columns="10" style={{ backgroundColor: '#e6e6e6' }}>
            10
          </Col>
        </Row>
        <Row>
          <Col columns="3" style={{ backgroundColor: '#c3c3c3' }}>
            3
          </Col>
          <Col columns="9" style={{ backgroundColor: '#e6e6e6' }}>
            9
          </Col>
        </Row>
        <Row>
          <Col columns="4" style={{ backgroundColor: '#c3c3c3' }}>
            4
          </Col>
          <Col columns="8" style={{ backgroundColor: '#e6e6e6' }}>
            8
          </Col>
        </Row>
        <Row>
          <Col columns="5" style={{ backgroundColor: '#c3c3c3' }}>
            5
          </Col>
          <Col columns="7" style={{ backgroundColor: '#e6e6e6' }}>
            7
          </Col>
        </Row>
        <Row>
          <Col columns="6" style={{ backgroundColor: '#c3c3c3' }}>
            6
          </Col>
          <Col columns="6" style={{ backgroundColor: '#e6e6e6' }}>
            6
          </Col>
        </Row>
        <Row>
          <Col columns="7" style={{ backgroundColor: '#c3c3c3' }}>
            7
          </Col>
          <Col columns="5" style={{ backgroundColor: '#e6e6e6' }}>
            5
          </Col>
        </Row>
        <Row>
          <Col columns="8" style={{ backgroundColor: '#c3c3c3' }}>
            8
          </Col>
          <Col columns="4" style={{ backgroundColor: '#e6e6e6' }}>
            4
          </Col>
        </Row>
        <Row>
          <Col columns="9" style={{ backgroundColor: '#c3c3c3' }}>
            9
          </Col>
          <Col columns="3" style={{ backgroundColor: '#e6e6e6' }}>
            3
          </Col>
        </Row>
        <Row>
          <Col columns="10" style={{ backgroundColor: '#c3c3c3' }}>
            10
          </Col>
          <Col columns="2" style={{ backgroundColor: '#e6e6e6' }}>
            2
          </Col>
        </Row>
        <Row>
          <Col columns="11" style={{ backgroundColor: '#c3c3c3' }}>
            11
          </Col>
          <Col columns="1" style={{ backgroundColor: '#e6e6e6' }}>
            1
          </Col>
        </Row>
        <Row>
          <Col columns="12" style={{ backgroundColor: '#c3c3c3' }}>
            12
          </Col>
        </Row>
        <Row>
          <Col
            columns="11"
            offset="1"
            style={{ backgroundColor: 'rebeccapurple' }}
          >
            11 offset 1
          </Col>
        </Row>
        <Row>
          <Col columns="10" offset="2" style={{ backgroundColor: 'orange' }}>
            10 offset 2
          </Col>
        </Row>
        <Row>
          <Col columns="6" offset="6" style={{ backgroundColor: 'yellow' }}>
            6 offset 6
          </Col>
        </Row>
        <Row>
          <Col
            columns="6"
            offset="1/2"
            style={{ backgroundColor: 'orangered' }}
          >
            6 offset 1/2
          </Col>
        </Row>
        <Row>
          <Col columns="8" offset="1/3" style={{ backgroundColor: '#bada55' }}>
            8 offset 1/3
          </Col>
        </Row>
        <Row>
          <Col columns="4" offset="2/3" style={{ backgroundColor: '#e6e6e6' }}>
            4 offset 2/3
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default grid
