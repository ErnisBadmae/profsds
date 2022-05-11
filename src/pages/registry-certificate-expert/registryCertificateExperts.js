import React, { useEffect } from 'react';
import { Table } from 'antd';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

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
        {
            title: '',
            dataIndex: 'id',
            data_type: 'string',
            is_sort: true,
            number_in_row: 2,
        },

        {
            title: 'Фамилия, имя, отчество эксперта',
            dataIndex: 'expert_name',
            data_type: 'string',
            is_sort: true,
            number_in_row: 1,
            //   render: (expert_name, record) => (
            //       <Link to={`/organ-certification-expert/view/${record.id}`}>
            //           {expert_name}{' '}
            //       </Link>
            //   ),
        },
    ];
    const relocateToCard = (record) => {
        return {
            onClick: (e) => {
                e.preventDefault();
                switch (pathname) {
                    case '/organ-certifications/list':
                        navigate('/organ-certification/view/' + record.id);
                        break;

                    case '/organ-certification-experts/list':
                        navigate(
                            '/organ-certification-expert/view/' + record.id
                        );
                        break;

                    case '/certificates/list':
                        navigate('/certificate/view/' + record.id);
                        break;

                    default:
                        navigate('/standard-certification/view/' + record.id);
                        break;
                }
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
            />
        </div>
    );
};
