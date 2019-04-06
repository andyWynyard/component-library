import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.legend`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`

const Legend = props => {
  const { children, className } = props
  const css = classNames('legend', className)
  return <Wrapper className={css}>{children}</Wrapper>
}

Legend.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Legend
