import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonRegistry } from '../../../components/buttons/button-registry/button-registry';
import { getView } from '../../../store/entries/actions';

import './card-item.css';

function CardOs(props) {
    const { pathname } = useLocation();

    //     console.log(pathname, 'pathnamefromcardcurrent');
    //     const { id } = useParams();
    const dispatch = useDispatch();

    const { currentCard } = useSelector((state) => state.entries);

    const currentItem = currentCard?.reduce((acc, el, i) => {
        return {
            ...acc,
            ...el,
        };
    }, {});
    //     const currentItem = currentCard ?? Object.assign({}, currentCard);
    //     const currentItem = entries.find((el) => el.id_sds === id);
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

                {/* <strong>Дата решения об аккредитации</strong>
                <br />
                <p>{currentItem?.certificate_date}</p> */}

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
                <p>{currentItem?.site}</p>

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
            <div className="btn__card">
                <ButtonRegistry
                    text="Список членов СДС"
                    path={'/certificates/list'}
                />
                <ButtonRegistry
                    text="Сведения о компенсации"
                    path={'/certificates/list'}
                />
                <ButtonRegistry
                    text="Выгрузить реестр членов СДС"
                    path={'/certificates/list'}
                />
            </div>
        </div>
    );
}

export default CardOs;
