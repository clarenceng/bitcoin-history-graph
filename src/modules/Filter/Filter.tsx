import React from 'react'

interface IFilter {
  days: string
  refilter: (filter: any) => void
  plots: number
}

export const Filter = ({ days, refilter, plots }: IFilter) => {
  return (
    <div>
      <div>
        <select value={ days } onChange={ evt => refilter({ days: evt.target.value }) }>
          <option value={ '30' }>last month</option>
          <option value={ '180' }>6 months</option>
          <option value={ '360' }>1 year </option>
          <option value={ '1800' }>5 years</option>
        </select>
      </div>

      <div>
        <input
          type='number'
          value={ plots }
          onChange={ evt => refilter({ plots: parseInt(evt.target.value) }) }
        />
      </div>
    </div>
  )
}
