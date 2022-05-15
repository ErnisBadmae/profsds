import { createAsyncThunk } from '@reduxjs/toolkit';
// import { correctlyDate } from '../../../helpers/utils';

import axios from 'axios';

export const getEntries = createAsyncThunk(
    'entries/get',
    async (payload, dispatch) => {
        let result = await axios.post(
            `http://api-prof-sdc.anonamis.ru/api/register${payload}`
        );
        //    const data = result.data.data.data.reduce((acc, el) => {
        //        //   if ({ el } instanceof Date) correctlyDate({ el });
        //        return {
        //            ...acc,
        //            ...el,
        //        };
        //    }, {});
        //    console.log(data, 'data');
        //    return data;
        return result.data.data.data;
    }
);
