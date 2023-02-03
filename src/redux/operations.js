import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://63dc4678a3ac95cec5b433e6.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
});

export const addContact = createAsyncThunk('contacts/addContact', async (data, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', data);
        toast.success('Contact added successfuly!');
        return response.data;
    } catch (error) {
        toast.error('Oops, something went wrong( Please, try again!');
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        toast.success('Contact deleted successfuly!')
        return response.data;
    } catch (error) {
        toast.error('Oops, something went wrong( Please, try again!');
        return thunkAPI.rejectWithValue(error.message);
    }
})