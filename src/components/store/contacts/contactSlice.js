import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, postContact, deleteContact } from "./api";

export const contactsSlice = createSlice({
    name: 'contacts',

    initialState: {
        contactsArr: [],
        isLoading: false,
        error: null,
    },


    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending,
                (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled,
                (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contactsArr = action.payload;
            })
            .addCase(fetchContacts.rejected,
                (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(postContact.fulfilled,
                (state, action) => {
                state.contactsArr.push(action.payload)
                })
            .addCase(deleteContact.fulfilled,
                (state, action) => {
                    const index = state.contactsArr.findIndex(
                        ({ id }) => id === action.payload
                    );
                    state.contactsArr.splice(index, 1);
            })
        },
});


export const contactsReducer = contactsSlice.reducer;


// selectors

export const getContacts = state => state.contacts;

