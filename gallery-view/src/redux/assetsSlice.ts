// Use the PayloadAction type to declare the contents of `action.payload`
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface AssetObjectType {
  image: string
}

export interface AssetType {
  id: string,
  title: string,
  importedName: string,
  assets: AssetObjectType[],
  image: string,
  thumbnails: string[]
}

interface AssetsState {
  items: AssetType[],
  total: number,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

const initialState: AssetsState = {
  items: [],
  total: 0,
  status: 'idle',
  error: null
}

const assetsUrl = 'https://api.air.inc/shorturl/bDkBvnzpB/clips/search'

// Thunk (Async calls) // should use state pageNumber not a passed variable
export const fetchAssets = createAsyncThunk('assets/fetchAssets', async (_, thunkAPI) => {
    const assets = await fetch(assetsUrl)
        .then(async (resp) => {
            const response = await resp.json()
            const tempAssets = response?.data
            return tempAssets
        })
        .catch((error) => {
            return { success: false, msg: error }
        })
  return assets
})

// `createSlice` will infer the state type from the `initialState` argument
export const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setAssets(state, action: PayloadAction<string[]>) {
        return {
          ...state,
          assets: action.payload,
        }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAssets.pending, (state, _) => {
        state.status = 'loading'
      })
      .addCase(fetchAssets.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload.clips
        console.log('action.payload.clips', action.payload.clips)
        // state.items = [...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips, ...action.payload.clips]
        state.total = action.payload.total
      })
      .addCase(fetchAssets.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export const { setAssets } = assetsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAssets = (state: RootState) => state.assets.items

export default assetsSlice.reducer