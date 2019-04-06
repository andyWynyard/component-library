import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.table`
  width: 100%;
`

const Table = props => {
  const { children, className } = props
  const css = classNames('table', className)
  return <Wrapper className={css}>{children}</Wrapper>
}

Table.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Table
