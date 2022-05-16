import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { correctlyDate } from '../../../helpers/utils';
import { getView } from '../../../store/entries/actions';

import './card-item.css';

function CardSds(props) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();

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
                <strong>{currentItem?.full_name}</strong>
            </div>

            <div className="card__body">
                <strong>Сокращенное название</strong>
                <br />
                <p>{currentItem?.short_name}</p>

                <strong>Регистрационный номер</strong>
                <br />
                <p>{currentItem?.registration_number}</p>

                <strong>
                    <br />
                    Дата регистрации
                </strong>
                <p>{correctlyDate(currentItem?.registration_date)}</p>

                <strong>
                    <br />
                    Организация, представившая СДС на регистрацию (Оно же
                    Держатель)
                </strong>
                <p>{currentItem?.registration_company}</p>

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

                <strong>
                    <br />
                    Изображение знака
                </strong>
                <br />
                <p>{currentItem?.logo}</p>

                <strong>
                    <br />
                    Статус
                </strong>
                <br />
                <p>{currentItem?.status || 'нет данных'}</p>
            </div>
        </div>
    );
}

export default CardSds;

// const titles = ['Сокращенное название', 'Регистрационный номер'];
// return (
//      titles.map((el) => {
//           return <div>{el}</div>
//      })
