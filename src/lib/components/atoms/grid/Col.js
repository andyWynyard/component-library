import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.fieldset`
  padding: 0;
  border-width: 0;
  margin-bottom: 1.5rem;
`

const Col = props => {
  const { children, className } = props
  const css = classNames('col', className)
  return <Wrapper className={css}>{children}</Wrapper>
}

Col.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Col
