import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.td`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e1e1e1;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`

const Td = props => {
  const { children, className } = props
  const css = classNames('td', className)
  return (
    <Wrapper className={css} {...props}>
      {children}
    </Wrapper>
  )
}

Td.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Td
