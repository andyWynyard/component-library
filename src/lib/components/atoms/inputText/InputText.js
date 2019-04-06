import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// import 'typeface-raleway'

import {
  inputStyle,
  textareaStyle,
  selectStyle,
  labelStyle,
  legendStyle,
  fieldsetStyle,
  radioStyle,
  checkboxStyle,
} from './style'

const Wrapper = ({ children, className, tag, type, value, placeholder }) => {
  const css = classNames(type, className)
  const Tag = tag
  return (
    <Tag type={type} value={value} placeholder={placeholder} className={css} />
  )
}

Wrapper.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  tag: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

const Input = styled(Wrapper)`
  ${tag => {
    switch (tag) {
      case 'input':
        return inputStyle
      case 'textarea':
        return textareaStyle
      case 'select':
        return selectStyle
      case 'label':
        return labelStyle
      case 'legend':
        return legendStyle
      case 'fieldset':
        return fieldsetStyle
      case 'radio':
        return radioStyle
      case 'checkbox':
        return checkboxStyle
      default:
        return inputStyle
    }
  }}
`
export default Input
