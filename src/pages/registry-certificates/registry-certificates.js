import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'antd';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { relocateToCard } from '../../helpers/utils';
import { certifacatesTableColumn } from '../../helpers/columnsTableConstants';

import './registry-certificates.scss';

export const RegistryCertificates = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [filterValues] = useOutletContext();

    //     const newEnt = entries.map(({ el }) => {
    //         //    if (Object.prototype.toString.call(el) === '[object Date]') {
    //         //        correctlyDate(el.certificate_date);
    //         //    }
    //         if ({ el } instanceof Date) {
    //             correctlyDate(el);
    //         }
    //         return el;
    //         //    console.log(entries, 'after');
    //     });
    //     console.log(newEntries, 'newEntries');

    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const { data } = useSelector((state) => state.entries.entries);
    const { totalElements } = useSelector((state) => state.entries.entries);

    useEffect(() => {
        dispatch(
            getEntries({
                row_page: pageSize,
                page: pageIndex,
                pathname,
                filterValues: filterValues ? { ...filterValues } : {},
            })
        );
    }, [pageIndex, pageSize, pathname, filterValues, dispatch]);

    return (
        <div>
            <Table
                columns={certifacatesTableColumn}
                dataSource={data}
                className="registry-sro__table"
                size="medium"
                filterSearch={true}
                pagination={false}
                onRow={(record) => relocateToCard(record, pathname, navigate)}
                rowKey={(obj) => obj.id}
            />
            <Pagination
                key={'pagination'}
                showSizeChanger={true}
                current={pageIndex}
                total={totalElements}
                pageSize={pageSize}
                onChange={(page) => setPageIndex(page)}
                onShowSizeChange={(current, newPageSize) =>
                    setPageSize(newPageSize)
                }
            />
        </div>
    );
};
