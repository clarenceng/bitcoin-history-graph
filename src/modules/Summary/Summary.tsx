import React from 'react'

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
            <div key={ index }>
              <span>{ key }: </span>
              <span>{ key.indexOf('USD') > 0 ? USD.format(data[key]) : data[key] }</span>
            </div>
          ))
        : null
      }
    </section>
  )
}
