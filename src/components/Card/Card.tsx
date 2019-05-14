import React from 'react'
import classnames from 'classnames'
import { size } from '../../types'
import './Card.scss'

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  size?: size
}

export const Card = ({
  children,
  size,
  className
}: ICard) => {
  const styles = classnames(
    'c-card',
    `c-card--${size}`,
    className
  )
  return (
    <div className={ styles }>{ children }</div>
  )
}