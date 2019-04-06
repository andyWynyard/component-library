import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

const Wrapper = props => {
  const { tag, className, children } = props
  const css = classNames('list', className)
  const Tag = tag
  return (
    <Tag className={css} {...props}>
      {children}
    </Tag>
  )
}

Wrapper.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
}

const List = styled(Wrapper)`
  list-style: ${props =>
    props.tag === 'ul' ? 'circle inside' : 'decimal inside'};
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 2.5rem;
  & ul,
  & ol,
  & ol,
  & ul {
    margin: 1.5rem 0 1.5rem 3rem;
    font-size: 90%;
  }
`

export default List
