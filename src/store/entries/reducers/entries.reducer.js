import { createReducer } from '@reduxjs/toolkit';
import { getEntries } from '../actions/getEntries';
import { getView } from '../actions/getView';
<<<<<<< HEAD

=======
>>>>>>> 0ba165db48191a179a6c8e6bdb4f273e5c9c7d1a

import {
    getEntriesFail,
    getEntriesRequest,
    getEntriesSuccess,
    getViewFail,
    getViewRequest,
    getViewSuccess,
} from './getEntries';

const initialState = {
    loading: false,
    entries: [],
    currentCard: null,
};

export const entriesReducer = createReducer(initialState, {
    [getEntries.pending.toString()]: getEntriesRequest,
    [getEntries.fulfilled.toString()]: getEntriesSuccess,
    [getEntries.rejected.toString()]: getEntriesFail,
    [getView.pending.toString()]: getViewRequest,
    [getView.fulfilled.toString()]: getViewSuccess,
    [getView.rejected.toString()]: getViewFail,
});
