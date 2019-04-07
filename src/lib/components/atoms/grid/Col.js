import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  width: 100%;
  float: left;
  box-sizing: border-box;
  @media (min-width: 550px) {
    width: ${props => {
      switch (props.columns) {
        case '1':
          return '4.66666666667%'
        case '2':
          return '13.3333333333%'
        case '3':
          return '22%'
        case '4':
          return '30.6666666667%'
        case '5':
          return '39.3333333333%'
        case '6':
          return '48%'
        case '7':
          return '56.6666666667%'
        case '8':
          return '65.3333333333%'
        case '9':
          return '74%'
        case '10':
          return '82.6666666667%'
        case '11':
          return '91.3333333333%'
        case '12':
          return '100%'
        default:
          return '100%'
      }
    }};
    &:first-child {
      margin-left: ${props => {
        const col = props.columns
        switch (props.offset) {
          case '1':
            return '8.66666666667%'
          case '2':
            return '17.3333333333%'
          case '3':
            return '26%'
          case '4':
            return '34.6666666667%'
          case '5':
            return '43.3333333333%'
          case '6':
            return '52%'
          case '7':
            return '60.6666666667%'
          case '8':
            return '69.3333333333%'
          case '9':
            return '78%'
          case '10':
            return '86.6666666667%'
          case '11':
            return '95.3333333333%'
          case '1/3':
            return '34.6666666667%'
          case '2/3':
            return '69.3333333333%'
          case '1/2':
            return '52%'
          default:
            return '0'
        }
      }};
    }

    margin-left: ${props => {
      const col = props.columns
      switch (props.offset) {
        case '1':
          return '8.66666666667%'
        case '2':
          return '17.3333333333%'
        case '3':
          return '26%'
        case '4':
          return '34.6666666667%'
        case '5':
          return '43.3333333333%'
        case '6':
          return '52%'
        case '7':
          return '60.6666666667%'
        case '8':
          return '69.3333333333%'
        case '9':
          return '78%'
        case '10':
          return '86.6666666667%'
        case '11':
          return '95.3333333333%'
        case '1/3':
          return '34.6666666667%'
        case '2/3':
          return '69.3333333333%'
        case '1/2':
          return '52%'
        default:
          return col === '12' ? '0' : '4%'
      }
    }};
  }
`

const Col = props => {
  const { children, className, columns, offset } = props
  const css = classNames('col', className)
  return (
    <Wrapper columns={columns} offset={offset} className={css} {...props}>
      {children}
    </Wrapper>
  )
}

Col.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  columns: PropTypes.string,
  offset: PropTypes.string,
}

export default Col
