import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [];

export const contacts = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare: data => {
                return {
                    payload: {
                        ...data,
                        id: nanoid()
                    },
                };
            },
        },
        deleteContact: (state, action) =>
            state.filter(contact => contact.id !== action.payload),
        
    },
});

export const { addContact, deleteContact } = contacts.actions;
export const contactsReducer = contacts.reducer;

export const getContacts = state => state.contacts;

console.log(contacts);

 // initialState: {
    //     items: [],
    //     filter: '',
    // },

     // reducers: {
    //     addContact(state, action) {
    //         state.items.push(action.payload);
    //     },
    //     deleteContact(state, action) {
    //         state.items = state.items.filter(item => item.id !== action.payload.id);
    //         // Items from Uppercase
    //     },
    //     changeFilter(state, action) {
    //         state.filter = action.payload;
    //     }
    // }