import React from 'react'
import classnames from 'classnames'
import './Select.scss'
import { size } from '../../types'

interface ISelectOption {
  value: string | number
  label: string | number
}

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: ISelectOption[]
  inputSize?: size
}

export const Select = ({
    options,
    className,
    inputSize = 'md',
    ...props
}: ISelect) => {
  const styles = classnames(
    'c-select',
    `c-select--${inputSize}`,
    className
  )
  const optionsMap = options.map((option: ISelectOption) => (
    <option key={ option.value } value={ option.value }>{ option.label }</option>
  ))
  return (
    <div className='c-select-container'>
      <select className={ styles } { ...props }>{ optionsMap }</select>
      <div className='c-select-arrow' role='presentation'></div>
    </div>
  )
}