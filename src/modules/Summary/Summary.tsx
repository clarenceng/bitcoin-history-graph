import React from 'react'
import { ICryptoItem } from '../../types';

interface ISummary {
  data: any
}

export const Summary = ({ data }: ISummary) => {
  const summaryKeys = Object.keys(data)
  return (
    <section>
      { summaryKeys.length 
        ? summaryKeys.map((key: string, index: number) => (
            <div key={ index }>
              <span>{ key }: </span>
              <span>{ key.indexOf('USD') > 0 ? '$' + data[key].toFixed(2) : data[key] }</span>
            </div>
          ))
        : null
      }
    </section>
  )
}
