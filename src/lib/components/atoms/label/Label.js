import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.label`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  margin-bottom: ${props => (props.inline ? '0' : '0.5rem')};
  margin-left: ${props => (props.inline ? '0.5rem' : '0')};
  font-weight: ${props => (props.inline ? 'normal' : '600')};
`

const Label = props => {
  const { children, htmlFor, className, inline } = props
  const css = classNames('label', className)
  return (
    <Wrapper inline={inline} className={css} htmlFor={htmlFor}>
      {children}
    </Wrapper>
  )
}

Label.propTypes = {
  linkedTo: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
  inline: PropTypes.bool,
}

export default Label
