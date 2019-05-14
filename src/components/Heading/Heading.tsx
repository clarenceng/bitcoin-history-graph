import React from 'react'
import classnames from 'classnames'
import './Heading.scss'

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface IHeading extends React.BaseHTMLAttributes<HTMLHeadElement>{
  as: HeadingTypes
  displayAs: HeadingTypes
}

export const Heading = ({
  as: As,
  displayAs,
  children,
  className
}: IHeading) => {
  const styles = classnames(
    'c-heading',
    `c-heading--${displayAs}`,
    className
  )
  return (
    <As className={ styles }>{ children }</As>
  )
}
