import { Outlet } from 'react-router-dom';
import { Select, Input, Form, Drawer, Button } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import { Poisk } from '../../components/poisk/poisk';
import { useState } from 'react';

// const { Content } = Layout;
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

export const TableWrapper = () => {
    let [filterModalVisible, setFilterModalVisible] = useState(false);
    const [form] = Form.useForm();

    return (
        <div>
            {/* <Content style={{ padding: '0 20px' }}> */}
            <div className="registry-sro__filter-wrapper">
                <Poisk className="registry-sro__title-search" />
                <div className="registry-sro__name-registry">РЕЕСТР СДС</div>
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
                <Outlet />
            </div>
        </div>
    );
};
