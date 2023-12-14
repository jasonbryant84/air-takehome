// Use the PayloadAction type to declare the contents of `action.payload`
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface BoardType {
  title: string,
  thumbnails: string[]
}

interface BoardsState {
  items: BoardType[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

const initialState: BoardsState = {
  items: [],
  status: 'idle',
  error: null
}

const boardsUrl = 'https://api.air.inc/shorturl/bDkBvnzpB/boards/c74bbbc8-602b-4c88-be71-9e21b36b0514'

// Thunk (Async calls) // should use state pageNumber not a passed variable
export const fetchBoards = createAsyncThunk('boards/fetchBoards', async (_, thunkAPI) => {
    const boards = await fetch(boardsUrl)
        .then(async (resp) => {
            const response = await resp.json()
            const tempBoards = response?.data
            return tempBoards
        })
        .catch((error) => {
            return { success: false, msg: error }
        })
  return boards
})

// `createSlice` will infer the state type from the `initialState` argument
export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setBoards(state, action: PayloadAction<string[]>) {
        return {
          ...state,
          boards: action.payload,
        }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBoards.pending, (state, _) => {
        state.status = 'loading'
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchBoards.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export const { setBoards } = boardsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBoards = (state: RootState) => state.boards.items

export default boardsSlice.reducer