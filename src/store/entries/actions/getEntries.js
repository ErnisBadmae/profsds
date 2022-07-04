import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import axios from 'axios';

export const getEntries = createAsyncThunk('entries/get', async (payload) => {
    const result = await axios.post(
        `https://api-prof-sdc.anonamis.ru/api/register${payload.pathname}`,
        {
            row_page: payload.row_page,
            page: payload.page,
            filters: payload.filterValues,
        }
    );

    const value = result.data.data.data.map((el) => {
        //     if ({ el } instanceof Date) correctlyDate({ el });
        return {
            ...el,
            certificate_date: correctlyDate(el.certificate_date),
            valid: correctlyDate(el.valid),
            registration_date: correctlyDate(el.registration_date),
            valid_date: correctlyDate(el.valid_date),

            statusId: el.status?.id,
            statusTitle: el.status
                ? el.status?.title
                : el.status_certificate
                ? el.status_certificate?.title
                : '',
            osValue:
                el.organ_certification_certificate
                    ?.short_name_organ_certification,
        };
    });
    const totalElements = result.data.data.data_header.count;
    return { data: value, totalElements };
});
