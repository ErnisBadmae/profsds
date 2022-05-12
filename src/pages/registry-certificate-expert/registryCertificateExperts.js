import React, { useEffect } from 'react';
import { Table } from 'antd';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { relocateToCard } from '../../components/relocateCard/relocateCard';
// import { sdsTableColumns } from '../../helpers/columnsTableConstants';

import './registry-certificate-expert.scss';

export const RegistryCertificationExperts = () => {
    const { entries } = useSelector((state) => state.entries);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getEntries(pathname));
    }, [pathname, dispatch]);

    const columns = [
        //    {
        //        title: '',
        //        dataIndex: 'id',
        //        data_type: 'string',
        //        is_sort: true,
        //        number_in_row: 2,
        //    },
        {
            title: 'Имя Эксперта',
            dataIndex: 'expert_name',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={entries}
                className="registry-sro__table"
                size="medium"
                filterSearch={true}
                pagination={{
                    // pageSize: '5',
                    showSizeChanger: true,
                    // itemRender: itemRender
                    total: entries.length,
                }}
                onRow={(record) => relocateToCard(record, pathname, navigate)}
                rowKey={(obj) => obj.id}
            />
        </div>
    );
};
