import React from 'react'
import classnames from 'classnames'
import { size } from '../../types'
import './TextInput.scss'

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: size
}

export const TextInput = ({
  className,
  type = 'string',
  inputSize = 'md',
  ...props
}: ITextInput ) => {
  const styles = classnames(
    'c-text-input',
    `c-text-input--${inputSize}`,
    className
  )
  return (
    <input type={ type } className={ styles } {...props} />
  )
}
