import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filter = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter(_, action) {
            return action.payload;
        },
    },
});

export const { setFilter } = filter.actions;
export const filtersReducer = filter.reducer;