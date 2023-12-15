// Use the PayloadAction type to declare the contents of `action.payload`
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface SearchState {
  value: string
}

const initialState: SearchState = {
  value: '',
}

// `createSlice` will infer the state type from the `initialState` argument
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { updateSearch } = searchSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.search.value

export default searchSlice.reducer