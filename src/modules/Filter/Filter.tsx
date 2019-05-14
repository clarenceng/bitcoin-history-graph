import React from 'react'
import { TextInput, Select, Grid } from '../../components'

interface IFilter {
  days: string
  refilter: (filter: any) => void
  plots: number
}

const selectOptions = [{
  value: '30',
  label: 'last month'
}, {
  value: '180',
  label: '6 months'
}, {
  value: '360',
  label: '1 year'
}, {
  value: '1800',
  label: '5 years'
}]

export const Filter = ({ days, refilter, plots }: IFilter) => {
  return (
    <Grid.Row>
      <Grid.Col length={3}>
        <label>
          <p>Date:</p>
          <Select
            value={ days }
            onChange={ evt => refilter({ days: evt.target.value }) }
            options={ selectOptions }
          />
        </label>
      </Grid.Col>

      <Grid.Col length={3}>
        <label>
          <p>Data Points:</p>
          <TextInput
            type='number'
            value={ plots }
            onChange={ evt => refilter({ plots: parseInt(evt.target.value) }) }
          />
        </label>
      </Grid.Col>
    </Grid.Row>
  )
}
