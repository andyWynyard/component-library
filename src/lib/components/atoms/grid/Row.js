import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'

const Wrapper = styled.div`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`

const Row = props => {
  const { className, children } = props
  const css = classNames('row', className)
  return (
    <Wrapper className={css} {...props}>
      {children}
    </Wrapper>
  )
}

Row.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default Row
