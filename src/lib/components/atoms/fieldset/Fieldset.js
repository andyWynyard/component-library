import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.fieldset`
  padding: 0;
  border-width: 0;
  margin-bottom: 1.5rem;
`

const Fieldset = props => {
  const { children, className } = props
  const css = classNames('fieldset', className)
  return <Wrapper className={css}>{children}</Wrapper>
}

Fieldset.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Fieldset
