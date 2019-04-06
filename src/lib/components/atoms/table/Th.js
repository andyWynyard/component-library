import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.th`
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

const Th = props => {
  const { children, className } = props
  const css = classNames('th', className)
  return <Wrapper className={css}>{children}</Wrapper>
}

Th.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Th
