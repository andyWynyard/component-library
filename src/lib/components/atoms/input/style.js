import { css } from 'styled-components'

const inputStyle = css`
  &[type='submit'],
  &[type='reset'],
  &[type='button'] {
    display: inline-block;
    height: 38px;
    padding: 0 30px;
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
    margin-bottom: 1rem;

    &:hover,
    &:focus {
      color: ${props => (props.primary ? '#fff' : '#333')};
      border-color: ${props => (props.primary ? '#1eaedb' : '#888')};
      outline: 0;
      background-color: ${props => (props.primary ? '#1eaedb' : 'transparent')};
    }
  }

  &[type='email'],
  &[type='number'],
  &[type='search'],
  &[type='text'],
  &[type='tel'],
  &[type='url'],
  &[type='password'] {
    width: 100%;
    height: 38px;
    padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
    background-color: #fff;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin-bottom: 1.5rem;
    &:focus {
      border: 1px solid #33c3f0;
      outline: 0;
    }
  }
`

export default inputStyle
