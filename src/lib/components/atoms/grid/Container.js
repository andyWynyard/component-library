import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  @media (min-width: 400px) {
    width: 85%;
    padding: 0;
  }

  /* For devices larger than 550px */
  @media (min-width: 550px) {
    width: 80%;
  }
`

const Container = props => {
  const { children, className, maxWidth = '1200px' } = props
  const css = classNames('container', className)
  return (
    <Wrapper className={css} maxWidth={maxWidth} {...props}>
      {children}
    </Wrapper>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  maxWidth: PropTypes.string,
}

export default Container
