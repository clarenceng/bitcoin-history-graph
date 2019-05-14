import React from 'react'
import './Summary.scss'

interface ISummary {
  data: any
}

const USD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

export const Summary = ({ data }: ISummary) => {
  const summaryKeys = Object.keys(data)
  return (
    <section>
      { summaryKeys.length 
        ? summaryKeys.map((key: string, index: number) => (
            <div  className='summary' key={ index }>
              <span className='summary__label'>{ key }: </span>
              <span>{ key.indexOf('USD') > 0 ? USD.format(data[key]) : data[key] }</span>
            </div>
          ))
        : null
      }
    </section>
  )
}
