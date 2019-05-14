import { ICryptoItem } from '../../types'

interface IReducerState {
  filter: {
    time: string
  } | null
  crypto: [{
    [key: number]: ICryptoItem
  }] | null
}

interface IReducerAction {
  type: string
  body: any
}

export const initialState: IReducerState = {
  filter: null,
  crypto: null
}

export const reducer = (state: IReducerState, action: IReducerAction ): IReducerState => {
  switch (action.type) {
    case 'request': return {
      ...state,
      crypto: action.body
    }
    case 'refilter': return {
      ...state,
      filter: action.body
    }
    default: throw new Error('what happened')
  }
}