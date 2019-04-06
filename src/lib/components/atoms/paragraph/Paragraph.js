import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import 'typeface-raleway'

const TextWrapper = props => {
  const { children, className } = props
  const css = classNames('text', className)
  const Tag = `p`
  return (
    <Tag className={css} {...props}>
      {children}
    </Tag>
  )
}

TextWrapper.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

const Paragraph = styled(TextWrapper)`
  margin-top: 0;
  margin-bottom: 2.5rem;
`

export default Paragraph
