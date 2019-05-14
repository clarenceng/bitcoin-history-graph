import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ICryptoItem } from '../../types';

interface IChart {
  data: any
  days: string
  plots: number
  onChartClick: (label: string) => void
}

export const Chart = ({ data, days, plots, onChartClick }: IChart) => {
  const removalAmount = plots < parseInt(days) ? parseInt(days) / plots : 1
  const a = data
    .filter((item: ICryptoItem, index: number) => index % removalAmount === 0)
    .map((item: ICryptoItem) => {
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
        width={600}
        height={300}
        data={a}
        onClick={(evt) => evt ? onChartClick(evt.activeLabel) : null}
        margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc"  strokeDasharray="3 3"/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  )
}
