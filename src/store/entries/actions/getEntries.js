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
                registration_date: correctlyDate(el.registration_date),
            };
        });
        return value;
    }
);
