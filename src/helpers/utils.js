import { Input, Form } from 'antd';

export const relocateToCard = (record, pathname, callback) => {
    return {
        onClick: (e) => {
            e.preventDefault();
            switch (pathname) {
                case '/organ-certifications/list':
                    callback('/organ-certification/view/' + record.id);
                    break;

                case '/organ-certification-experts/list':
                    callback('/organ-certification-expert/view/' + record.id);
                    break;

                case '/certificates/list':
                    callback('/certificate/view/' + record.id);
                    break;

                default:
                    callback('/standard-certification/view/' + record.id);
                    break;
            }
        },
    };
};

export const correctlyDate = (stringDate) => {
    let correct = new Date(stringDate);
    return correct.toLocaleDateString('ru');
};

export const handleTitle = (pathname) => {
    switch (pathname) {
        case '/organ-certifications/list':
            return 'Реестр ОС';

        case '/organ-certification-experts/list':
            return 'Реестр экспертов';

        case '/certificates/list':
            return 'Реестр сертификатов';

        default:
            return 'Реестр СДС';
    }
};

export const handleInputsFilter = (pathname) => {
    switch (pathname) {
        case '/organ-certifications/list':
            return (
                <>
                    <Form.Item name="address">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="СДС"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="full_name_organ_certification">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Полное наименование организации"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="regNumber">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="ИНН"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="regNumber">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Количество аттестованных экспертов"
                        ></Input>
                    </Form.Item>
                </>
            );

        case '/organ-certification-experts/list':
            return (
                <>
                    <Form.Item name="address">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="№ сертификата (аттестата)"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="fullName">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Фамилия, имя, отчество эксперта"
                        ></Input>
                    </Form.Item>
                    <Form.Item name="regNumber">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Дата выдачи аттестата"
                        ></Input>
                    </Form.Item>
                </>
            );

        case '/certificates/list':
            return (
                <>
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
                </>
            );

        default:
            return (
                <>
                    <Form.Item name="registration_company">
                        <Input
                            className="registry-sro__filter-input"
                            placeholder="Держатель"
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
                </>
            );
    }
};
