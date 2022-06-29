import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../../store/entries/actions';
import { BreadCrumbs } from '../../../components/breadCrumbs/breadCrumbs';

import './card-item.css';

function CardOs(props) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const { currentCard } = useSelector((state) => state.entries);
    console.log(currentCard, 'currentCard');
    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    const cardData = [
        {
            id: 1,
            title: 'Полное наименование организации',
            value: currentCard?.full_name_organ_certification,
        },
        {
            id: 2,
            title: 'Сокращенное наименование организации',
            value: currentCard?.short_name_organ_certification,
        },
        {
            id: 3,
            title: 'Номер аттестата аккредитации',
            value: currentCard?.certificate_number,
        },
        {
            id: 4,
            title: 'Дата решения об аккредитации',
            value: currentCard?.certificate_date,
        },
    ];

    return (
        <div class="card-container">
            <BreadCrumbs registry="os-card">
                <span> {'>'} </span>
                <span> {currentCard?.full_name_company} </span>
            </BreadCrumbs>
            <div className="card">
                <div className="card__title">
                    <strong>{currentCard?.full_name_company}</strong>
                </div>

                <div className="card__body">
                    {cardData.map((field) => {
                        return (
                            <div key={field.id}>
                                <strong>{field.title}</strong>
                                <br />
                                <p>{field.value}</p>
                            </div>
                        );
                    })}

                    {/* <strong>
                        <br />
                        Номер решения об аккредитации
                    </strong>
                    <p>{currentCard?.decision_number}</p>

                    <strong>
                        <br />
                        ИНН
                    </strong>
                    <br />
                    <p>{currentCard?.inn}</p>

                    <strong>
                        <br />
                        ОГРН
                    </strong>
                    <br />
                    <p>{currentCard?.ogrn}</p>

                    <strong>
                        <br />
                        ФИО руководителя
                    </strong>
                    <br />
                    <p>{currentCard?.manager_name}</p>

                    <strong>
                        <br />
                        Электронная почта
                    </strong>
                    <br />
                    <p>{currentCard?.email}</p>

                    <strong>
                        <br />
                        Сайт
                    </strong>
                    <br />
                    <p>
                        <a href={currentCard?.site}>{currentCard?.site}</a>
                    </p>

                    <strong>
                        <br />
                        Область распространения
                    </strong>
                    <br />
                    <p>{currentCard?.area}</p> */}
                    {/* <strong>
                         <br />
                         Статус
                     </strong>
                     <br />
                     <p>{currentItem?.status || 'нет данных'}</p> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default CardOs;
