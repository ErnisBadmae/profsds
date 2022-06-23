import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import axios from 'axios';

export const getView = createAsyncThunk('view/getCurrent', async (payload) => {
    let result = await axios.get(
        `https://api-prof-sdc.anonamis.ru/api/register${payload}`
    );
    const value = result.data.data.reduce((acc, el, i) => {
        return {
            ...acc,
            ...el,
            certificate_date: correctlyDate(el.certificate_date),
            valid_date: correctlyDate(el.valid_date),
            valid: correctlyDate(el.valid),
            registration_date: correctlyDate(el.registration_date),
            introduction_date: correctlyDate(el.introduction_date),
            exclusion_date: correctlyDate(el.exclusion_date),
        };
    }, {});
    //     if ({ el } instanceof Date) correctlyDate({ el });
    //   return {
    //       ...el,
    //       certificate_date: correctlyDate(el.certificate_date),
    //       valid_date: correctlyDate(el.valid_date),
    //       registration_date: correctlyDate(el.registration_date),
    //   };
    //    });

    //    console.log('value', value);
    return value;
});
