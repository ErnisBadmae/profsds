import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../../store/entries/actions';
import { correctlyDate } from '../../../helpers/utils';

import './card-item.css';

function CardSertificate(props) {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { currentCard } = useSelector((state) => state.entries);

    const currentItem = currentCard?.reduce((acc, el, i) => {
        return {
            ...acc,
            ...el,
        };
    }, {});

    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    return (
        <div className="card">
            <div className="card__title">
                <strong>{currentItem?.company_name}</strong>
            </div>

            <div className="card__body">
                <strong>№ выданного сертификата</strong>
                <br />
                <p>{currentItem?.number}</p>
                <br />

                <strong>ИНН получателя</strong>
                <br />
                <p>{currentItem?.company_inn}</p>

                <strong>
                    <br />№ бланка
                </strong>
                <p>{currentItem?.certificate_form}</p>

                <strong>
                    <br />
                    Дата выдачи
                </strong>
                <br />
                <p>{correctlyDate(currentItem?.certificate_date)}</p>
                <strong>
                    <br />
                    Срок действия сертификата
                </strong>
                <br />
                <p>{correctlyDate(currentItem?.valid_date)}</p>

                <strong>
                    <br />
                    Соответствие требованиям (например, стандарт)
                </strong>
                <br />
                <p>{currentItem?.certificate_conformity}</p>

                <strong>
                    <br />
                    ОГРН получателя
                </strong>
                <br />
                <p>{currentItem?.company_ogrn}</p>

                <strong>
                    <br />
                    Особые отметки (например, оценка при наличии)
                </strong>
                <br />
                <p>{currentItem?.comment}</p>

                <strong>
                    <br />
                    Скан-копия сертификата
                </strong>
                <br />
                <p>{currentItem?.certificate_scan}</p>

                {/* <strong>
                    <br />
                    Статус
                </strong>
                <br />
                <p>{currentItem?.status || 'нет данных'}</p> */}
            </div>
        </div>
    );
}

export default CardSertificate;
