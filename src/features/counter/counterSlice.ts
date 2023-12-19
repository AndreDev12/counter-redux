import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCount } from './counterAPI';

export interface CounterState {
  value: number;
}

interface PropsPayloadAction {
  payload: number;
  type: string;
}

const initialState: CounterState = {
  value: 0,
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  },
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addAmount: (state, action: PropsPayloadAction) => {
      state.value += action.payload;
    },
    addIfOdd: (state, action) => {
      if (state.value % 2 === 1) {
        state.value += action.payload;
      }
    },
  },
});

export const { increment, decrement, addAmount, addIfOdd } =
  counterSlice.actions;
export default counterSlice.reducer;
