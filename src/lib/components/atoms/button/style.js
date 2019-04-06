import { css } from 'styled-components'

const style = css`
  margin-bottom: 1rem;
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  margin-bottom: 1rem;
  color: ${props => (props.primary ? '#fff' : '#555')};
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: ${props => (props.primary ? '#33c3f0' : 'transparent')};
  border-radius: 4px;
  border: 1px solid ${props => (props.primary ? '#33c3f0' : '#bbb')};
  cursor: pointer;
  box-sizing: border-box;

  &:hover,
  &:focus {
    color: ${props => (props.primary ? '#fff' : '#333')};
    border-color: ${props => (props.primary ? '#1eaedb' : '#888')};
    outline: 0;
    background-color: ${props => (props.primary ? '#1eaedb' : 'transparent')};
  }
`
export default style
