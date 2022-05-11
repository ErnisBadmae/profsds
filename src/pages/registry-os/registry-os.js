import React, { useEffect } from 'react';
import { Table } from 'antd';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import './registry-os.scss';

export const RegistryOs = () => {
    const { entries } = useSelector((state) => state.entries);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(getEntries(pathname));
    }, [pathname, dispatch]);

    const columns = [
        {
            title: '',
            dataIndex: 'id_sds',
            data_type: 'string',
            is_sort: true,
            number_in_row: 2,
        },
        {
            title: 'Наименование',
            dataIndex: 'full_name_organ_certification',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
        },
        {
            title: 'Сокращенное название',
            dataIndex: 'short_name_organ_certification',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
        },
    ];
    const relocateToCard = (record) => {
        //    console.log(record, 'recorddddddd');
        return {
            onClick: (e) => {
                e.preventDefault();
                navigate('/organ-certification/view/' + 1);
            },
        };
    };

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
                onRow={(record) => relocateToCard(record)}
                rowKey={(obj) => obj.id}
            />
        </div>
    );
};
