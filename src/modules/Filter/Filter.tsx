import React from 'react'
import { TextInput, Select, Grid } from '../../components'
import { IFilters } from '../../types'

interface IFilter {
  filter: IFilters
  refilter: (filter: any) => void
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

export const Filter = ({ filter, refilter }: IFilter) => {
  return (
    <Grid.Row>
      <Grid.Col length={3}>
        <label>
          <p>Date:</p>
          <Select
            value={ filter.days }
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
            value={ filter.plots }
            onChange={ evt => refilter({ plots: parseInt(evt.target.value) }) }
          />
        </label>
      </Grid.Col>
    </Grid.Row>
  )
}
