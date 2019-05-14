import React, { useEffect, useState } from 'react'
import { Summary } from '../Summary'
import { Chart } from '../Chart'
import { Filter } from '../Filter'
import { Heading, Grid } from '../../components'
import './App.css'
import { ICryptoItem, IFilters } from '../../types'
import { compose } from '../../helpers'

const getDays = (days: string = '30') => (crypto: ICryptoItem[]): ICryptoItem[] => {
  return crypto.slice(crypto.length - parseInt(days), crypto.length)
}

const shortenBy = ({ days, plots }: IFilters) => (crypto: ICryptoItem[]): ICryptoItem[] => {
  const amount = plots < parseInt(days) ? parseInt(days) / plots : 1
  return crypto.filter((item: ICryptoItem, index: number) => index % amount === 0)
}

export const App = () => {
  const [crypto, setCrypto] = useState<ICryptoItem[]>([])
  const [summary, setSummary] = useState<ICryptoItem | {}>({})
  const [filter, setFilter] = useState<IFilters>({ days: '30', plots: 10 })
  const [filteredCrypto, setFilteredCrypto] = useState<ICryptoItem[]>([])

  useEffect(() => {
    fetch('https://cryto-86904.firebaseio.com/bitcoin.json')
      .then(res => res.json().then(crypto => {
        setCrypto(crypto)
        setFilteredCrypto(getDays('30')(crypto))
        setSummary(crypto[crypto.length - 1])
      }))
  }, [])

  useEffect(() => {
    const filterData = compose(
      getDays(filter.days),
      shortenBy(filter)
    )
    setFilteredCrypto(filterData(crypto))
  }, [filter])

  const handleFilter = (newFilter: any) => {
    setFilter({
      ...filter,
      ...newFilter
    })
  }

  const handleChartClick = (label: string) => {
    const selectedSummary = crypto.find((data: ICryptoItem) => data.date === label) || {}
    setSummary(selectedSummary)
  }

  return (
    <main className='app' role='main'>
      <Heading as='h1' displayAs='h1'>Bitcoin History Graph</Heading>
      <Grid.Row className='app__body'>
        <Grid.Col length={ 4 }>
          <Summary data={ summary } />
        </Grid.Col>
        <Grid.Col length={ 8 }>
          <Filter
            filter={ filter }
            refilter={ handleFilter }
          />
          <Chart
            data={ filteredCrypto }
            onChartClick={ handleChartClick }
          />
        </Grid.Col>
      </Grid.Row>
    </main>
  )
}
