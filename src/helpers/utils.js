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
