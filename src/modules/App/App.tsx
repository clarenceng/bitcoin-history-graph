import React, { useEffect, useState } from 'react';
import { Summary } from '../Summary'
import { Chart } from '../Chart'
import { Filter } from '../Filter'
import { Heading, Grid } from '../../components'
import './App.css';
import { ICryptoItem } from '../../types';

const getDays = (crypto: any, days: string = '30') => {
  return crypto.slice(crypto.length - parseInt(days), crypto.length)
}

export const App = () => {
  const [crypto, setCrypto] = useState([])
  const [summary, setSummary] = useState({})
  const [filter, setFilter] = useState({ days: '30', plots: 10 })
  const [filteredCrypto, setFilteredCrypto] = useState([])

  useEffect(() => {
    fetch('https://cryto-86904.firebaseio.com/bitcoin.json')
      .then(res => res.json().then(body => {
        setCrypto(body)
        setFilteredCrypto(getDays(body))
      }))
  }, [])

  useEffect(() => {
    setFilteredCrypto(getDays(crypto, filter.days))
  }, [filter])

  const handleFilter = (newFilter: any) => {
    console.log('nsdfs', newFilter)
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
    <main className='App' role='main'>
      <Heading as='h1' displayAs='h1'>Crypto Graph</Heading>
      <Grid.Row>
        <Grid.Col length={ 4 }>
          <Summary data={ summary } />
        </Grid.Col>
        <Grid.Col length={ 8 }>
          <Filter
            days={ filter.days }
            refilter={ handleFilter }
            plots={ filter.plots }
          />
          <Chart
            data={ filteredCrypto }
            days={ filter.days }
            plots={ filter.plots }
            onChartClick={ handleChartClick }
          />
        </Grid.Col>
      </Grid.Row>
    </main>
  )
}
