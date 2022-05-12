export const sdsTableColumns = [
    {
        title: '',
        dataIndex: 'id_sds',
        data_type: 'string',
        is_sort: true,
        number_in_row: 2,
    },
    {
        title: 'Статус ',
        dataIndex: 'status',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Наименование СДС',
        dataIndex: 'full_name',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Регистрационный номер СДС',
        dataIndex: 'reg_no',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Держатель',
        dataIndex: 'reg_comp',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Дата регистрации',
        dataIndex: 'reg_date',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
];

export const organCertificationTableColumn = [
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

export const expertsListTableColumn = [
    {
        title: '',
        dataIndex: 'id',
        data_type: 'string',
        is_sort: true,
        number_in_row: 2,
    },

    {
        title: 'Фамилия, имя, отчество эксперта',
        dataIndex: 'expert_name_link',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
];

export const certifacatesTableColumn = [
    {
        title: '',
        dataIndex: 'id',
        data_type: 'string',
        is_sort: true,
        number_in_row: 2,
    },
    {
        title: '№ сертификата',
        dataIndex: 'number',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Наименование организации',
        dataIndex: 'company_name',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },

    {
        title: 'Срок действия сертификата',
        dataIndex: 'certificate_date',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: 'Валидация',
        dataIndex: 'valid_date',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
];
