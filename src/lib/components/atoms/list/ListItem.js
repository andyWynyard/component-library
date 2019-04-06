import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

const Wrapper = styled.li`
  margin-bottom: 1rem;
`

const ListItem = props => {
  const { children, className } = props
  const css = classNames('li', className)
  return (
    <Wrapper className={css} {...props}>
      {children}
    </Wrapper>
  )
}

ListItem.propTypes = {
  children: PropTypes.any,
}

export default ListItem
