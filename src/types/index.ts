export type size = 'sm' | 'md' | 'lg'

export type appearance = 'default' | 'success' | 'danger' | 'info' | 'warning'

export interface ICryptoItem {
  activeAddresses: number
  'adjustedTxVolume(USD)': number
  averageDifficulty: number
  blockCount: number
  blockSize: number
  date: string
  'exchangeVolume(USD)': number
  fees: number
  generatedCoins: number
  'marketcap(USD)': number
  medianFee: number
  'medianTxValue(USD)': number
  paymentCount: number
  'price(USD)': number
  'realizedCap(USD)': number
  txCount: number
  'txVolume(USD)': number
  [key: string]: string | number
}

export interface IFilters {
  days: string
  plots: number
}
