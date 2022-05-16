import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import axios from 'axios';

export const getEntries = createAsyncThunk(
    'entries/get',
    async (payload, dispatch) => {
        let result = await axios.post(
            `http://api-prof-sdc.anonamis.ru/api/register${payload}`
        );
        const value = result.data.data.data.map((el) => {
            //   if ({ el } instanceof Date) correctlyDate({ el });

            return {
                ...el,
                certificate_date: correctlyDate(el.certificate_date),
                valid_date: correctlyDate(el.valid_date),
            };
        });

        //    return data;

        //    const newEntries = entries.map((el) => {
        //      return correctlyDate(el.valid_date);
        //      //    return {
        //      //        ...el,
        //      //    };
        //  });
        //  console.log(newEntries, 'newEntries');

        return value;
    }
);
