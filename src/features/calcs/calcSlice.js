import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState: initialState,

  reducers: {
    add: (currentState, action) => {
      const {firstNumberInput,secondNumberInput} = action.payload;
      currentState.result = Number(firstNumberInput) + Number(secondNumberInput);;
    },

    subtract: (currentState,action) => {
      const {firstNumberInput,secondNumberInput} = action.payload;
      currentState.result = Number(firstNumberInput) - Number(secondNumberInput);
    },

    multiply: (currentState,action) => {
      const {firstNumberInput,secondNumberInput} = action.payload;
      currentState.result = Number(firstNumberInput) * Number(secondNumberInput);
    },

    divide: (currentState,action) => {
      const {firstNumberInput,secondNumberInput} = action.payload;
      currentState.result = Number(firstNumberInput) / Number(secondNumberInput);
    },
  },
});

export const { add,subtract,multiply,divide } = calcSlice.actions;
export default calcSlice.reducer;
