import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { relocateToCard } from '../../helpers/utils';
import { sdsTableColumns } from '../../helpers/columnsTableConstants';
import './registry-sds.scss';

export const RegistrySds = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { entries } = useSelector((state) => state.entries);
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(getEntries(pathname));
    }, [pathname, dispatch]);

    return (
        <div>
            <Table
                columns={sdsTableColumns}
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
