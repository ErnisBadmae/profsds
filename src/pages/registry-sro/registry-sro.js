import { Table, Layout, Select, Input, Form, Drawer, Button } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { getEntries, getView } from '../../store/entries/actions';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    entriesTableColumns,
    organCertificationTableColumn,
    expertsListTableColumn,
    certifacatesTableColumn,
} from '../../helpers/entriesTableConstants';
import { Poisk } from '../../components/poisk/poisk';
import './registry-sro.scss';

const { Content } = Layout;
const { Option } = Select;

const statusOptions = [
    {
        value: 'active',
        title: 'Действует',
    },
    {
        value: 'inactive',
        title: 'Исключено',
    },
    {
        value: 'wait',
        title: 'Замечания',
    },
];

export const RegistryRSO = ({ listType }) => {
    let [filterModalVisible, setFilterModalVisible] = useState(false);

    const { entries } = useSelector((state) => state.entries);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const { pathname } = useLocation();

    const body = {};

    useEffect(() => {
        console.log(pathname, 'pathname');
        switch (pathname) {
            case '/organ_certifications/list':
                dispatch(getEntries(pathname));
                break;
            case '/organ-certification-experts/list':
                dispatch(getEntries(pathname));
                break;
            case '/certificates/list':
                dispatch(getEntries(pathname));
                break;

            default:
                dispatch(getEntries('/standard-certifications/list'));
                break;
        }

    }, [pathname, dispatch]);

    const dataSource = entries.map((item) => ({ ...item, key: item.id }));


    const relocateToCard = (record) => {
        return {
            onClick: (e) => {
                e.preventDefault();
                navigate('/view/' + record.id);
            },
        };
    };

    const handleColumns = () => {
        switch (pathname) {
            case '/organ_certifications/list':
                return organCertificationTableColumn;

            case '/organ-certification-experts/list':
                return expertsListTableColumn;

            case '/certificates/list':
                return certifacatesTableColumn;

            default:
                return entriesTableColumns;
        }
    };

    return (
        <div>
            <Content style={{ padding: '0 20px' }}>
                <div className="registry-sro__filter-wrapper">
                    <Poisk className="registry-sro__title-search" />
                    <div className="registry-sro__name-registry">
                        РЕЕСТР СДС
                    </div>
                    <FilterFilled
                        className="registry-sro__filter-icon"
                        onClick={() => setFilterModalVisible(true)}
                    />
                </div>
                <div className="registry-sro__drawer-wrapper">
                    <Drawer
                        getContainer={false}
                        style={{ position: 'absolute' }}
                        title="Отфильтровать записи"
                        visible={filterModalVisible}
                        onClose={() => setFilterModalVisible(false)}
                    >
                        <Form form={form}>
                            <Form.Item name="state">
                                <Select
                                    className="registry-sro__filter-input"
                                    placeholder="Статус"
                                >
                                    {statusOptions.map((el) => (
                                        <Option key={el.value} value={el.value}>
                                            {el.title}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item name="address">
                                <Input
                                    className="registry-sro__filter-input"
                                    placeholder="Адрес"
                                ></Input>
                            </Form.Item>
                            <Form.Item name="fullName">
                                <Input
                                    className="registry-sro__filter-input"
                                    placeholder="Полное наименование организации"
                                ></Input>
                            </Form.Item>
                            <Form.Item name="regNumber">
                                <Input
                                    className="registry-sro__filter-input"
                                    placeholder="Регистрационный номер"
                                ></Input>
                            </Form.Item>
                        </Form>
                        <div className="registry-sro__buttons-wrapper">
                            <Button
                                className="custom-button"
                                onClick={() => setFilterModalVisible(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="custom-button"
                                type="primary"
                                onClick={() => {
                                    console.log(form.getFieldsValue());
                                }}
                            >
                                OK
                            </Button>
                        </div>
                    </Drawer>

                    <Table
                        columns={handleColumns()}
                        dataSource={dataSource}
                        className="registry-sro__table"
                        size="medium"
                        filterSearch={true}
                        pagination={{
                            // pageSize: '5',
                            showSizeChanger: true,
                            // itemRender: itemRender
                            total: dataSource.length,
                        }}
                        onRow={(record) => relocateToCard(record)}
                    />
                </div>
            </Content>
        </div>
    );
};

