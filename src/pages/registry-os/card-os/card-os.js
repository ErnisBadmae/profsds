import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../../store/entries/actions';
import { correctlyDate } from '../../../helpers/utils';

import './card-item.css';

function CardOs(props) {
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
                <strong>
                    {currentItem?.full_name_organization_certification}
                </strong>
            </div>

            <div className="card__body">
                <strong>Номер аттестата аккредитации</strong>
                <br />
                <p>{currentItem?.certificate_number}</p>
                <br />

                <strong>Дата решения об аккредитации</strong>
                <br />
                <p>{correctlyDate(currentItem?.certificate_date)}</p>

                <strong>
                    <br />
                    Номер решения об аккредитации
                </strong>
                <p>{currentItem?.decision_number}</p>

                <strong>
                    <br />
                    ИНН
                </strong>
                <br />
                <p>{currentItem?.inn}</p>

                <strong>
                    <br />
                    ОГРН
                </strong>
                <br />
                <p>{currentItem?.ogrn}</p>

                <strong>
                    <br />
                    ФИО руководителя
                </strong>
                <br />
                <p>{currentItem?.manager_name}</p>

                <strong>
                    <br />
                    Адрес
                </strong>
                <br />
                <p>{currentItem?.address}</p>

                <strong>
                    <br />
                    Электронная почта
                </strong>
                <br />
                <p>{currentItem?.email}</p>

                <strong>
                    <br />
                    Сайт
                </strong>
                <br />
                <p>
                    <a href={currentItem?.site}>{currentItem?.site}</a>
                </p>

                <strong>
                    <br />
                    Область распространения
                </strong>
                <br />
                <p>{currentItem?.area}</p>

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

export default CardOs;
