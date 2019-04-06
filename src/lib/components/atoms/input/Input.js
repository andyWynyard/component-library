import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// import 'typeface-raleway'

import inputStyle from './style'

const Wrapper = styled.input`
  ${inputStyle}
`

const Input = props => {
  const { className, type, value, placeholder } = props
  const css = classNames(type, className)
  return (
    <Wrapper
      type={type}
      value={value}
      placeholder={placeholder}
      className={css}
      {...props}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input
