import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

export const contacts = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) { 
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) { 
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(
                contact => contact.id !== action.payload.id
            )
        },
        [deleteContact.rejected]: handleRejected,
    }
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //             state.push(action.payload);
    //         },
    //         prepare: data => {
    //             return {
    //                 payload: {
    //                     ...data,
    //                     id: nanoid()
    //                 },
    //             };
    //         },
    //     },
    //     deleteContact: (state, action) =>
    //         state.filter(contact => contact.id !== action.payload),
        
    //     fetchingInProgress(state) {
    //         state.isLoading = true;
    //     },
    //     fetchingSuccess(state, action) {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.items = action.payload;
    //     },
    //     fetchingError(state, action) {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    // },
});

// export const { addContact, deleteContact, fetchingInProgress, fetchingSuccess, fetchingError } = contacts.actions;
export const contactsReducer = contacts.reducer;

console.log(contacts);