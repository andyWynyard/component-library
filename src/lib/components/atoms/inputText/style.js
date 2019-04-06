import { css } from 'styled-components'

export const inputStyle = css`
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

  &:focus {
    border: 1px solid #33c3f0;
    outline: 0;
  }
`

export const textareaStyle = css`
  height: 38px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  min-height: 65px;
  padding-top: 6px;
  padding-bottom: 6px;
  &:focus {
    border: 1px solid #33c3f0;
    outline: 0;
  }
`
export const selectStyle = css`
  height: 38px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  &:focus {
    border: 1px solid #33c3f0;
    outline: 0;
  }
`
export const labelStyle = css`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  margin-bottom: ${props => (!props.inline ? '0' : '0.5rem')};
  font-weight: ${props => (props.inline ? 'normal' : '600')};
  margin-left: ${props => (props.inline ? '0.5rem' : '0')};
`
export const legendStyle = css`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`

export const fieldsetStyle = css`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`

export const radioStyle = css`
  display: inline;
`
export const checkboxStyle = css`
  display: inline;
`
