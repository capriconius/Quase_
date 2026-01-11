import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contact'

type FilterState = {
  search: string
  criteria: 'relation' | 'all'
  value?: enums.Relation
}

const initialState: FilterState = {
  search: '',
  criteria: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setCriteria: (state, action: PayloadAction<'relation' | 'all'>) => {
      state.criteria = action.payload
    },
    setValue: (state, action: PayloadAction<enums.Relation | undefined>) => {
      state.value = action.payload
    }
  }
})

export const { setSearch, setCriteria, setValue } = filterSlice.actions
export default filterSlice.reducer
