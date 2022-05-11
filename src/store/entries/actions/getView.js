import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getView = createAsyncThunk(
    'view/getCurrent',
    async (payload, dispatch) => {
        //    console.log('dispatch', dispatch);
        let result = await axios.get(
            `http://api-prof-sdc.anonamis.ru/api/register${payload}`
        );

        console.log('result', result);
        //    return currentItem;
        return result.data.data;
    }
);
