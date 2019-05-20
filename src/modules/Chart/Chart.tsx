import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ICryptoItem } from '../../types';

interface IChart {
  data: ICryptoItem[]
  onChartClick: (label: string) => void
}

export const Chart = ({ data, onChartClick }: IChart) => {
  const formattedData = data.map((item: ICryptoItem) => {
    return {
      name: item['date'],
      uv: item['price(USD)'],
      pv: item['date'],
      amt: item['price(USD)']
    }
  })
  return (
    <div>
      <LineChart
        width={ 500 }
        height={ 300 }
        data={ formattedData }
        onClick={ (evt) => evt ? onChartClick(evt.activeLabel) : null }
        margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
      >
        <Line type='monotone' dataKey='uv' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc'  strokeDasharray='3 3'/>
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  )
}
