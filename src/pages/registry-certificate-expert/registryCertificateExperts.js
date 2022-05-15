import React, { useEffect } from 'react';
import { Table } from 'antd';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { relocateToCard, correctlyDate } from '../../helpers/utils';
import { certificateExpertsTable } from '../../helpers/columnsTableConstants';

import './registry-certificate-expert.scss';

export const RegistryCertificationExperts = () => {
    const { entries } = useSelector((state) => state.entries);

    //     console.log(newEntries, 'entries');

    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getEntries(pathname));
    }, [pathname, dispatch]);

    return (
        <div>
            <Table
                columns={certificateExpertsTable}
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
