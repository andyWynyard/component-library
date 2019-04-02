import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import style from './style'

const StyledButton = styled.button`
  ${style}
`

const Button = ({ className, children, primary }) => {
  const css = classNames('button', className)

  return (
    <StyledButton className={css} primary={primary}>
      {children}
    </StyledButton>
  )
}

Button.propsTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  primary: PropTypes.boolean,
}

export default Button
