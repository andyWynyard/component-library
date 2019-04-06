import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.textarea`
  font-size: inherit;
  margin-bottom: 1.5rem;
  width: 100%;
  height: 38px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-height: 65px;
  padding-top: 6px;
  padding-bottom: 6px;
  &:focus {
    border: 1px solid #33c3f0;
    outline: 0;
  }
`

const TextArea = props => {
  const { className, value, placeholder } = props
  const css = classNames('textarea', className)

  return (
    <Wrapper
      value={value}
      placeholder={placeholder}
      className={css}
      {...props}
    />
  )
}

TextArea.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

export default TextArea
