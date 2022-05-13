export const sdsTableColumns = [
    {
        title: '',
        dataIndex: 'id',
        data_type: 'string',
        is_sort: true,
        number_in_row: 2,
        sorter: (a, b) => a.id - b.id,
        showSorterTooltip: false,
        defaultSortOrder: 'ascend',
        //   sortDirections: ['descend', 'ascend'],
    },

    {
        title: 'Наименование СДС',
        dataIndex: 'full_name',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
        align: 'center',
    },
    {
        title: 'Сокращенное название',
        dataIndex: 'short_name',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
        align: 'center',
    },
    {
        title: 'Регистрационный номер СДС',
        dataIndex: 'registration_number',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
        align: 'center',
    },
];

export const OsTableColumn = [
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
    {
        title: 'Номер сертификата',
        dataIndex: 'certificate_number',
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
        sorter: (a, b) => a.id - b.id,
        showSorterTooltip: false,
        defaultSortOrder: 'ascend',
    },
    {
        title: 'Наименование организации',
        dataIndex: 'company_name',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
    {
        title: '№ сертификата',
        dataIndex: 'number',
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
];

export const certificateExpertsTable = [
    {
        title: '',
        dataIndex: 'id',
        data_type: 'string',
        is_sort: true,
        number_in_row: 2,
        sorter: (a, b) => a.id - b.id,
        showSorterTooltip: false,
        defaultSortOrder: 'ascend',
    },
    {
        title: 'Имя Эксперта',
        dataIndex: 'expert_name',
        data_type: 'string',
        is_sort: true,
        number_in_row: 1,
    },
];
